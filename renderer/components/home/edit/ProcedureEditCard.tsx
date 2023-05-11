import { useRecoilValue } from 'recoil'
import { procedureCommentState, procedureNameState, secondCardState } from 'renderer/recoil/homeAtoms'
import EditColumns from './EditColumns'
import EditParameters from './EditParameters'

const ProcedureEditCard = () => {
	const comment = useRecoilValue(procedureCommentState)
	const name = useRecoilValue(procedureNameState)

	return (
		<div className={`card second-card`}>
			<div>{comment}</div>
			<div>
				{name}
				<EditParameters />
				<EditColumns />
			</div>
		</div>
	)
}

export default ProcedureEditCard
