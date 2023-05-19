import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil'
import CustomInput from 'renderer/components/custom/CustomInput'
import { procedureParameterList } from 'renderer/recoil/homeAtoms'

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
		<div className={'edit-container'}>
			{parameterList.map((parameter, index) => (
				<div key={`procedureParameter_${index}`} className={'edit-row'}>
					{parameter.parameterName}
					<CustomInput defaultValue={parameter.parameterType} placeholder={'write type'} onChange={(e: ChangeEvent<HTMLInputElement>) => changeParameter(index, e.target.value, false)} />
					<CustomInput defaultValue={parameter.parameterInfo} placeholder={'write info'} onChange={(e: ChangeEvent<HTMLInputElement>) => changeParameter(index, e.target.value, true)} />
				</div>
			))}
		</div>
	)
}

export default EditParameters
