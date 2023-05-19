import { useRecoilValue, useSetRecoilState } from 'recoil'
import {
	cardOrderSelector,
	cardOrderSelectorFamily,
	secondCardState
} from 'renderer/recoil/homeAtoms'
import EditSection from './edit/EditSection'
import ResultSection from './result/ResultSection'

const ProcedureEditCard = () => {
	const isActive = useRecoilValue(secondCardState)
	const cardOrder = useRecoilValue(cardOrderSelectorFamily('edit'))
	const setCardOrder = useSetRecoilState(cardOrderSelector)

	return (
		<div className={`card ${isActive ? '' : 'hidden-card'} ${isActive ? cardOrder : ''}`}
				 onClick={() => (cardOrder !== 'top-card' ? setCardOrder('edit') : '')}>
			<div className={`card-label second-card-label ${cardOrder !== 'top-card' ? 'card-label-active' : ''}`}>EDIT</div>
			<div className={'second-card-content'}>
				<EditSection />
				<ResultSection />
			</div>
		</div>
	)
}

export default ProcedureEditCard
