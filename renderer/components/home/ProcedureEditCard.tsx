import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { cardOrderSelector, cardOrderSelectorFamily, procedureCommentState, procedureNameState, secondCardState, thirdCardState } from 'renderer/recoil/homeAtoms'
import EditColumns from './edit/EditColumns'
import EditParameters from './edit/EditParameters'

const ProcedureEditCard = () => {
	const isActive = useRecoilValue(secondCardState)
	const [thirdCardActive, setThirdCardActive] = useRecoilState(thirdCardState)
	const cardOrder = useRecoilValue(cardOrderSelectorFamily('edit'))
	const setCardOrder = useSetRecoilState(cardOrderSelector)
	const comment = useRecoilValue(procedureCommentState)
	const name = useRecoilValue(procedureNameState)

	const test = () => {
		if (!thirdCardActive) setCardOrder('result')
		setThirdCardActive((prev) => !prev)
	}

	return (
		<div className={`card ${isActive ? '' : 'hidden-card'} ${isActive ? cardOrder : ''}`} onClick={() => (cardOrder !== 'top-card' ? setCardOrder('edit') : '')}>
			<div className={`card-label second-card-label ${cardOrder !== 'top-card' ? 'card-label-active' : ''}`}>EDIT</div>
			<button onClick={test}>third active</button>
			<div>
				<h3>2</h3>
			</div>
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
