import { useRecoilValue } from 'recoil'
import {
	procedureColumnList,
	procedureCommentState,
	procedureNameState,
	procedureParameterList
} from '../../../recoil/homeAtoms'
import { Fragment } from 'react'

const ResultSection = () => {
	const comment = useRecoilValue(procedureCommentState)
	const name = useRecoilValue(procedureNameState)
	const parameters = useRecoilValue(procedureParameterList)
	const columns = useRecoilValue(procedureColumnList)

	const copy = () => {
		
	}

	return (
		<div className={'result-container'}>
			<div>{comment}</div>
			<div>{name}&nbsp;(</div>
			{parameters.map(({ parameterName, parameterType, parameterInfo }, index) => (
				<div
					key={`result_parameter_${index}`}>,{parameterName}&ensp;{parameterType}&emsp;&emsp;--&ensp;{parameterInfo}</div>
			))})
			<br />
			{columns.map((select, selectIndex) => (
				<Fragment key={`result_select_${selectIndex}`}>
					<br />
					<div>{`###result${selectIndex + 1}`}</div>
					{select.map(({ columnName, columnType, columnInfo }, index) => (
						<div key={`result_column_${index}`}>{columnName}&ensp;{columnType}&emsp;&emsp;--&ensp;{columnInfo}</div>
					))}
				</Fragment>
			))}
			<div>
				<button onClick={copy}>copy</button>
			</div>
		</div>
	)
}

export default ResultSection