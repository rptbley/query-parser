import { atom } from 'recoil'
import { Column, ParsedProcedureParameter } from 'renderer/hooks/parser/types'

export const procedureNameState = atom<string>({
	key: 'procedureNameState',
	default: '',
})

export const procedureCommentState = atom<string>({
	key: 'procedureCommentState',
	default: '',
})

export const procedureParameterList = atom<ParsedProcedureParameter[]>({
	key: 'procedureParameterList',
	default: [],
})

export const procedureColumnList = atom<Column[]>({
	key: 'procedureColumnList',
	default: [],
})
