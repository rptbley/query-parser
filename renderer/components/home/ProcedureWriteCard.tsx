import { ChangeEvent, useState } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import useParser from 'renderer/hooks/parser/useParser'
import { cardOrderSelector, cardOrderSelectorFamily, secondCardState } from 'renderer/recoil/homeAtoms'

const ProcedureWriteCard = () => {
	const { getParsedProcedure } = useParser()
	const [rawProcedure, setRawProcedure] = useState<string>('')
	const [isSecondActive, setIsSecondActive] = useRecoilState(secondCardState)
	const cardOrder = useRecoilValue(cardOrderSelectorFamily('write'))
	const setCardOrder = useSetRecoilState(cardOrderSelector)

	const changeProcedure = (e: ChangeEvent<HTMLTextAreaElement>) => {
		const value = e.target.value
		const isValueEmpty = value === undefined || value.trim() === ''
		setRawProcedure(isValueEmpty ? '' : value)
	}

	const clickParsingButton = async () => {
		if (rawProcedure === '') return
		getParsedProcedure(rawProcedure)
	}

	const test = () => {
		if (isSecondActive) return
		setCardOrder('edit')
		setIsSecondActive(true)
	}

	return (
		<div className={`card ${cardOrder}`} onClick={() => (cardOrder !== 'top-card' ? setCardOrder('write') : '')}>
			<div>write procedure</div>
			<div></div>
		</div>
	)
}

export default ProcedureWriteCard
