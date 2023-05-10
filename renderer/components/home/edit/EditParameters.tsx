import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import { procedureParameterList } from 'renderer/recoil/parsedProcedure'

const EditParameters = () => {
	const [parameterList, setParameterList] = useRecoilState(procedureParameterList)

	const changeParameter = (index: number, value: string, isInfo: boolean) => {
		setParameterList((prevList) => {
			const changeList = [...prevList]
			const { parameterName, parameterType, parameterInfo } = changeList[index]

			changeList[index] = {
				parameterName: parameterName,
				parameterType: isInfo ? parameterType : value,
				parameterInfo: isInfo ? value : parameterInfo,
			}
			return changeList
		})
	}

	return (
		<div>
			{parameterList.map((parameter, index) => (
				<div key={`procedureParameter_${index}`} className={'edit-container'}>
					<div>{parameter.parameterName}</div>
					<div>
						<input className={'edit-input'} type={'text'} defaultValue={parameter.parameterType} onChange={(e: ChangeEvent<HTMLInputElement>) => changeParameter(index, e.target.value, false)} />
					</div>
					<div>
						<input className={'edit-input'} type={'text'} defaultValue={parameter.parameterInfo} onChange={(e: ChangeEvent<HTMLInputElement>) => changeParameter(index, e.target.value, true)} />
					</div>
				</div>
			))}
		</div>
	)
}

export default EditParameters
