import { ChangeEvent, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import useParser from 'renderer/hooks/parser/useParser'
import { cardOrderSelector, cardOrderSelectorFamily, secondCardState } from 'renderer/recoil/homeAtoms'
import CustomButton from '../custom/CustomButton'
import CustomTextarea from '../custom/CustomTextarea'

const ProcedureWriteCard = () => {
	const { getParsedProcedure } = useParser()
	const [rawProcedure, setRawProcedure] = useState<string>('')
	const [isSecondActive, setIsSecondActive] = useRecoilState(secondCardState)
	const cardOrder = useRecoilValue(cardOrderSelectorFamily('write'))
	const setCardOrder = useSetRecoilState(cardOrderSelector)

	const isTop = cardOrder === 'top-card'

	const changeProcedure = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value
		const isValueEmpty = value === undefined || value.trim() === ''
		setRawProcedure(isValueEmpty ? '' : value)
	}

	const clickParsingButton = async () => {
		if (rawProcedure === '') return
		await getParsedProcedure(rawProcedure)
		openNextCard()
	}

	const openNextCard = () => {
		if (isSecondActive) return
		setCardOrder('edit')
		setIsSecondActive(true)
	}

	return (
		<div className={`card ${cardOrder}`} onClick={() => (!isTop ? setCardOrder('write') : '')}>
			<div className={`card-label ${!isTop ? 'card-label-active' : ''}`}>WRITE</div>
			<div className={'first-card-content'}>
				<div>
					<CustomTextarea placeholder={'write your procedure'} defaultValue={rawProcedure} onChange={changeProcedure} />
				</div>
				<div>
					<CustomButton buttonName={'add table'} onClick={() => {
					}} />
				</div>
				<div>
					<CustomButton buttonName={'parse'} onClick={clickParsingButton} />
				</div>
			</div>
		</div>
	)
}

export default ProcedureWriteCard
