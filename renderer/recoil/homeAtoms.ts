import { atom, selector, selectorFamily } from 'recoil'
import { Column, ParsedProcedureParameter } from 'renderer/hooks/parser/types'

export const secondCardState = atom<boolean>({
	key: 'secondCardState',
	default: false
})

export const cardOrderState = atom<string[]>({
	key: 'cardOrderState',
	default: ['write', 'edit']
})

export const cardOrderSelector = selector<string>({
	key: 'cardOrderSelector',
	get: ({ get }) => get(cardOrderState)[0],
	set: ({ set }, newValue: string) => {
		set(cardOrderState, (prev) => {
			const changeList = structuredClone(prev)
			const targetIndex = changeList.indexOf(newValue)
			changeList.splice(targetIndex, 1)
			return [newValue, ...changeList]
		})
	}
})

export const cardOrderSelectorFamily = selectorFamily<string, 'write' | 'edit'>({
	key: 'cardOrderSelectorFamily',
	get:
		(target) =>
			({ get }) => {
				const targetIndex = get(cardOrderState).indexOf(target)

				switch (targetIndex) {
					case 0:
						return 'top-card'
					case 1:
						return 'middle-card'
				}
			}
})

export const procedureNameState = atom<string>({
	key: 'procedureNameState',
	default: ''
})

export const procedureCommentState = atom<string>({
	key: 'procedureCommentState',
	default: ''
})

export const procedureParameterList = atom<ParsedProcedureParameter[]>({
	key: 'procedureParameterList',
	default: []
})

export const procedureColumnList = atom<Column[][]>({
	key: 'procedureColumnList',
	default: [],
	dangerouslyAllowMutability: true
})
