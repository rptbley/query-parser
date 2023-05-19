import { ChangeEvent, Fragment, useMemo } from 'react'
import { useRecoilState } from 'recoil'
import CustomInput from 'renderer/components/custom/CustomInput'
import { procedureColumnList } from 'renderer/recoil/homeAtoms'
import { Column } from '../../../hooks/parser/types'

type ResultsRowType = {
	selectIndex: number
	index: number
	column: Column
	changeColumnList: (selectIndex: number, index: number, value: string, isInfo: boolean) => void
}

const ResultsRow = ({ selectIndex, index, column, changeColumnList }: ResultsRowType) => {

	return useMemo(() => {
		return (
			<div key={`procedureColumn_${index}`} className={'edit-row'}>
				{column.columnName}
				<CustomInput defaultValue={column.columnType} placeholder={'write type'}
										 onChange={(e: ChangeEvent<HTMLInputElement>) => changeColumnList(selectIndex, index, e.target.value, false)} />
				<CustomInput defaultValue={column.columnInfo} placeholder={'write Info'}
										 onChange={(e: ChangeEvent<HTMLInputElement>) => changeColumnList(selectIndex, index, e.target.value, true)} />
			</div>
		)
	}, [column])
}

const EditResults = () => {
	const [columnList, setColumnList] = useRecoilState(procedureColumnList)

	const changeColumnList = (selectIndex: number, index: number, value: string, isInfo: boolean) => {
		setColumnList((prevList) => {
			const changeList = [...prevList]
			const { columnName, columnType, columnInfo } = changeList[selectIndex][index]

			changeList[selectIndex][index] = {
				columnName: columnName,
				columnType: isInfo ? columnType : value,
				columnInfo: isInfo ? value : columnInfo
			}

			return changeList
		})
	}

	return (
		<>
			{columnList.map((select, selectIndex) => (
				<Fragment key={`select_${selectIndex}}`}>
					<div className={'edit-container'}>
						<div>{`result${selectIndex + 1}`}</div>
						{select.map((column, index) => <ResultsRow key={`column_${index}`} selectIndex={selectIndex} index={index}
																											 column={column} changeColumnList={changeColumnList} />)}
					</div>
					<br />
				</Fragment>
			))}
		</>
	)
}

export default EditResults
