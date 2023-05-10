import { useRecoilValue } from 'recoil'
import { procedureCommentState, procedureNameState } from 'renderer/recoil/parsedProcedure'
import EditColumns from './EditColumns'
import EditParameters from './EditParameters'

const EditResult = () => {
	const comment = useRecoilValue(procedureCommentState)
	const name = useRecoilValue(procedureNameState)
	return (
		<div>
			<div>{comment}</div>
			<div>
				{name}
				<EditParameters />
				<EditColumns />
			</div>
		</div>
	)
}

export default EditResult
