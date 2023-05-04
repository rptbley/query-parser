export type Schema = {
	schemaName: string
	tables: Table[]
}

export type Table = {
	tableName: string
	columns: Column[]
}

export type Column = {
	columnName: string
	columnType: string
	columnInfo: string
}

export type ParsedProcedure = {
	comment: string
	name: string
	parameterList: ParsedProcedureParameter[]
	columnList: Column[]
}

export type ParsedProcedureParameter = {
	parameterName: string
	parameterInfo: string
}
