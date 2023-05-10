import { atom } from 'recoil'
import { Column, ParsedProcedure, ParsedProcedureParameter } from 'renderer/hooks/parser/types'

export const parsedProcedureState = atom<ParsedProcedure>({
	key: 'parsedProcedureState',
	default: {
		name: '',
		comment: '',
		parameterList: [],
		columnList: [],
	},
})

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
