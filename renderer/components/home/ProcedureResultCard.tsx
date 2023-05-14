import { useRecoilValue, useSetRecoilState } from 'recoil'
import { cardOrderSelector, cardOrderSelectorFamily, thirdCardState } from 'renderer/recoil/homeAtoms'

const ProcedureResultCard = () => {
	const isActive = useRecoilValue(thirdCardState)
	const cardOrder = useRecoilValue(cardOrderSelectorFamily('result'))
	const setCardOrder = useSetRecoilState(cardOrderSelector)

	return (
		<div className={`card ${isActive ? '' : 'hidden-card'} ${isActive ? cardOrder : ''}`} onClick={() => setCardOrder('result')}>
			<div className={`card-label third-card-label ${cardOrder !== 'top-card' ? 'card-label-active' : ''}`}>RESULT</div>
		</div>
	)
}

export default ProcedureResultCard
