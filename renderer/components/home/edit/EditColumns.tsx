import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { procedureColumnList } from 'renderer/recoil/parsedProcedure'

const EditColumns = () => {
	const [columnList, setColumnList] = useRecoilState(procedureColumnList)

	const changeColumnList = (index: number, value: string, isInfo: boolean) => {
		setColumnList((prevList) => {
			const changeList = [...prevList]
			const { columnName, columnType, columnInfo } = changeList[index]

			changeList[index] = {
				columnName: columnName,
				columnType: isInfo ? columnType : value,
				columnInfo: isInfo ? value : columnInfo,
			}

			return changeList
		})
	}

	return (
		<div>
			{columnList.map((column, index) => (
				<div key={`procedureColumn_${index}`} className={'edit-container'}>
					<div>{column.columnName}</div>
					<div>
						<input className={'edit-input'} type={'text'} defaultValue={column.columnType} onChange={(e: ChangeEvent<HTMLInputElement>) => changeColumnList(index, e.target.value, false)} />
					</div>
					<div>
						<input className={'edit-input'} type={'text'} defaultValue={column.columnInfo} onChange={(e: ChangeEvent<HTMLInputElement>) => changeColumnList(index, e.target.value, true)} />
					</div>
				</div>
			))}
		</div>
	)
}

export default EditColumns
