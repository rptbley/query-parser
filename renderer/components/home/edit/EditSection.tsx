import EditParameters from './EditParameters'
import EditResults from './EditResults'
import { useRecoilValue } from 'recoil'
import { procedureCommentState, procedureNameState } from '../../../recoil/homeAtoms'

const EditSection = () => {
	const comment = useRecoilValue(procedureCommentState)
	const name = useRecoilValue(procedureNameState)

	return (
		<div>
			<div style={{ textAlign: 'center' }}>{comment}</div>
			<div>{name}(</div>
			<EditParameters />)
			<EditResults />
		</div>
	)
}

export default EditSection