import { useSetRecoilState } from 'recoil'
import {
	procedureColumnList,
	procedureCommentState,
	procedureNameState,
	procedureParameterList
} from 'renderer/recoil/homeAtoms'
import { Column, ParsedProcedure, ParsedProcedureParameter, Table } from './types'
import {
	AS_EXR,
	END_EXR,
	EXCLUDE_WORD_LIST,
	FUNCTION_KEYWORD_LIST,
	FUNC_END_EXR,
	LOWER_AS_EXR,
	SQL_TYPE_LIST,
	UPPER_AS_EXR
} from './utils'

const useParser = () => {
	const setComment = useSetRecoilState(procedureCommentState)
	const setName = useSetRecoilState(procedureNameState)
	const setParameterList = useSetRecoilState(procedureParameterList)
	const setColumnList = useSetRecoilState(procedureColumnList)

	const getParsedTable = (rawTable: string): Table => {
		return {
			tableName: getTableName(rawTable),
			columns: getTableColumnList(rawTable)
		}
	}

	const getTableName = (rawTable: string): string => rawTable.split('(')[0].split('table')[1].trim()

	const getTableColumnList = (rawTable: string): Column[] => {
		const result: Column[] = []
		const filteredTableColumnList = getFilteredTableColumnList(rawTable)

		for (let i = 0; i < filteredTableColumnList.length; i++) {
			const tempList = filteredTableColumnList[i].split(' ')
			result.push({
				columnName: tempList[1],
				columnType: tempList[2],
				columnInfo: tempList[tempList.length - 1]
			})
		}

		return result
	}

	const getFilteredTableColumnList = (rawTable: string): string[] => {
		const tempSet = new Set<string>()
		const splitedTableColumnList = getSplitedTableList(rawTable)

		SQL_TYPE_LIST.forEach((sqlType) => {
			splitedTableColumnList.forEach((splitedTableColumn) => {
				if (splitedTableColumn.indexOf(sqlType) <= -1) return
				tempSet.add(splitedTableColumn)
			})
		})

		return Array.from(tempSet)
	}

	const getSplitedTableList = (rawTable: string): string[] => rawTable.replaceAll(/ +/, ' ').split(/\n/)

	const getParsedProcedure = async (rawQuery: string) => {
		const parsedQueryList = getParsedQueryList(rawQuery)

		const result = await reset()

		if (result) {
			setName(getProcedureName(parsedQueryList[0]))
			setComment(getProcedureComment(parsedQueryList[0]))
			setParameterList(getProcedureParameterList(parsedQueryList[0]))
			setColumnList(getProcedureResultList(parsedQueryList[1]))
		}
	}

	const reset = () => {
		return new Promise<boolean>((resolve) => {
			setComment('')
			setName('')
			setParameterList([])
			setColumnList([])

			resolve(true)
		})
	}

	const getParsedQueryList = (rawQuery: string): string[] => rawQuery.replaceAll('\n', ' ').replaceAll('\t', '').replaceAll(/ +/g, ' ').split('BEGIN')

	const getProcedureComment = (parsedQuery: string): string => {
		const result = parsedQuery.split('comment')[1].match(/(?=')+.*(?=')/)
		return result && result.length > 0 ? '==========' + result[0].replaceAll('\'', '') + '==========' : ''
	}

	const getProcedureName = (parsedQuery: string): string => {
		return parsedQuery
			.split('procedure')[1]
			.match(/.+(?=\))/g)[0]
			.split('(')[0]
	}

	const getProcedureParameterList = (parsedQuery: string): ParsedProcedureParameter[] => {
		const result: ParsedProcedureParameter[] = []

		const splitQuery = parsedQuery.split('(IN ')[1]
		const parameterList = splitQuery.split(', IN ')

		parameterList.forEach((parameter, index) => {
			const parameterParts = parameter.split(' ')

			result.push({
				parameterName: parameterParts.shift(),
				parameterType: parameterList.length - 1 === index ? parameterParts.join(' ').split(') comment')[0] : parameterParts.join(' '),
				parameterInfo: ''
			})
		})

		return result
	}

	const getProcedureResultList = (parsedQuery: string): Column[][] => {
		const result: Column[][] = []
		const selectList: string[] = []
		const queryList: string[] = parsedQuery.split(';')

		queryList.forEach((value) => {
			if (value.indexOf('subSQL =') > -1) return
			if (value.indexOf('SELECT') > -1) {
				selectList.push(value)
			}
		})

		selectList.forEach((select) => parseSelect(select, result))

		return result
	}

	const parseSelect = (select: string, resultList: Column[][]) => {
		if (select.indexOf('UNION') > -1) {
			const tempSet = new Set<Column>()
			select.split('UNION ALL').forEach((s) => getColumnList(s).forEach((columnObj) => tempSet.add(columnObj)))
			resultList.push(Array.from(tempSet))
		} else {
			resultList.push(getColumnList(select))
		}
	}

	const getColumnList = (parsedSelect: string): Column[] => {
		const result: Column[] = []
		const filteredList = filterFunctionalKeyword(parsedSelect.split('SELECT')[1].split('FROM')[0].split(','))

		filteredList.forEach((filteredColumn) => {
			let columnName = ''
			const flag = FUNC_END_EXR.test(filteredColumn)

			if (flag) {
				const tempList = filteredColumn.split(getTargetExr(filteredColumn))
				columnName = tempList[tempList.length - 1]
			} else if (checkColumn(filteredColumn)) {
				columnName = filteredColumn.indexOf('.') > -1 ? filteredColumn.split('.')[1] : filteredColumn
			}

			if (columnName !== '') {
				result.push({ columnName: columnName.trim(), columnType: '', columnInfo: '' })
			}
		})

		return result
	}

	const filterFunctionalKeyword = (columnList: string[]): string[] => {
		let funcFlag = false
		const result: string[] = []

		columnList.forEach((column) => {
			let addFlag = true

			FUNCTION_KEYWORD_LIST.forEach((keyword) => {
				if (!funcFlag && column.indexOf(keyword) > -1) {
					if (AS_EXR.test(column)) return
					addFlag = false
					funcFlag = true
				}

				if (funcFlag && FUNC_END_EXR.test(column)) {
					funcFlag = false
					addFlag = true
					return
				}
			})

			if (addFlag && !funcFlag) {
				result.push(
					column
						.split(' ')
						.filter((v) => v !== '')
						.join(' ')
				)
			}
		})

		return result
	}

	const getTargetExr = (filteredColumn: string): RegExp => {
		if (UPPER_AS_EXR.test(filteredColumn)) return UPPER_AS_EXR
		if (LOWER_AS_EXR.test(filteredColumn)) return LOWER_AS_EXR
		return END_EXR
	}

	const checkColumn = (filteredColumn: string): boolean => {
		if (filteredColumn.indexOf('\'') > -1) return false

		let result = true
		EXCLUDE_WORD_LIST.forEach((excludeWord) => {
			if (filteredColumn.indexOf(excludeWord) > -1) {
				result = false
				return
			}
		})

		return result
	}

	const mergeTableColumnsToParsedProcedure = (targetProcedure: ParsedProcedure, targetTable: Table): ParsedProcedure => {
		targetProcedure.columnList.forEach((procedureColumn) => {
			targetTable.columns.forEach((tableColumn) => {
				if (procedureColumn.columnName === tableColumn.columnName) {
					procedureColumn.columnType = tableColumn.columnType
					procedureColumn.columnInfo = tableColumn.columnInfo
				}
			})
		})
		return targetProcedure
	}

	return {
		getParsedProcedure,
		getParsedTable,
		mergeTableColumnsToParsedProcedure
	}
}

export default useParser
