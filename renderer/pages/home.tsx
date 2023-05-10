import { ChangeEvent, useState } from 'react'
import CustomButtonDefault from 'renderer/components/custom/CustomButtonDefault'
import CustomTextArea from 'renderer/components/custom/CustomtextArea'
import AddTable from 'renderer/components/home/AddTable'
import useParser from 'renderer/hooks/parser/useParser'
import EditResult from 'renderer/components/home/edit/EditResult'
import { useResetRecoilState, useSetRecoilState } from 'recoil'
import { procedureColumnList, procedureCommentState, procedureNameState, procedureParameterList } from 'renderer/recoil/parsedProcedure'

const Home = () => {
	const { getParsedProcedure } = useParser()
	const [rawProcedure, setRawProcedure] = useState<string>('')

	const resetComment = useResetRecoilState(procedureCommentState)
	const resetName = useResetRecoilState(procedureNameState)
	const resetParameterList = useResetRecoilState(procedureParameterList)
	const resetColumnList = useResetRecoilState(procedureColumnList)

	const setComment = useSetRecoilState(procedureCommentState)
	const setName = useSetRecoilState(procedureNameState)
	const setParameterList = useSetRecoilState(procedureParameterList)
	const setColumnList = useSetRecoilState(procedureColumnList)

	const changeProcedure = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value
		const isValueEmpty = value === undefined || value.trim() === ''
		setRawProcedure(isValueEmpty ? '' : value)
	}

	const clickParsingButton = async () => {
		if (rawProcedure === '') return
		const result = await reset()

		if (result) {
			const { name, comment, parameterList, columnList } = getParsedProcedure(rawProcedure)
			setName(name)
			setComment(comment)
			setParameterList(parameterList)
			setColumnList(columnList)
		}
	}

	const reset = () => {
		return new Promise<boolean>((resolve) => {
			resetComment()
			resetName()
			resetParameterList()
			resetColumnList()

			resolve(true)
		})
	}

	return (
		<div className={'content'}>
			<div className={'add-container'}>
				<CustomTextArea name={'add Procedure'} changeEvent={changeProcedure} />
				<AddTable />
				<CustomButtonDefault buttonName={'parsing procedure'} onClick={clickParsingButton} />
				<EditResult />
			</div>
		</div>
	)
}

export default Home
