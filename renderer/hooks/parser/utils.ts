export const UPPER_AS_EXR = /\bAS/
export const LOWER_AS_EXR = /\bas/
export const END_EXR = /\bEND/
export const AS_EXR = /\bAS|\bas/
export const FUNC_END_EXR = /\bAS|\bas|\bEND/

export const EXCLUDE_WORD_LIST = ['IS NULL', 'IF', 'DATE']

export const FUNCTION_KEYWORD_LIST = [
	'ABS',
	'MOD',
	'POW',
	'SQRT',
	'CEILING',
	'FLOOR',
	'ROUND',
	'RAND',
	'TRUNCATE',
	'ASCII',
	'CHAR',
	'BIT_LENGTH',
	'CHAR_LENGTH',
	'LENGTH',
	'CONCAT',
	'CONCAT_WS',
	'INSTR',
	'FORMAT',
	'LPAD',
	'RPAD',
	'LTRIM',
	'RTRIM',
	'TRIM',
	'LEFT',
	'RIGHT',
	'MID',
	'LCASE',
	'UCASE',
	'LOWER',
	'UPPER',
	'REPLACE',
	'SUBSTRING',
	'SUBSTRING_INDEX',
	'ADDDATE',
	'SUBDATE',
	'DATE_ADD',
	'DATE_SUB',
	'CURDATE',
	'CURTIME',
	'NOW',
	'SYSDATE',
	'YEAR',
	'MONTH',
	'DAYOFMONTH',
	'HOUR',
	'MINUTE',
	'SECOND',
	'MICROSECOND',
	'MONTHNAME',
	'DAYNAME',
	'DAYOFWEEK',
	'WEEKDAY',
	'DATE',
	'TIME',
	'DATEDIFF',
	'TIMEDIFF',
	'DATE_FORMAT',
	'CONVERT_TZ',
	'IF',
	'IFNULL',
	'COUNT',
	'AVG',
	'SUM',
	'MIN',
	'MAX',
]

export const SQL_TYPE_LIST = [
	'char',
	'varchar',
	'tinytext',
	'text',
	'mediumtext',
	'longtext',
	'json',
	'tinyint',
	'smallint',
	'mediumint',
	'int',
	'bigint',
	'float',
	'decimal',
	'double',
	'date',
	'time',
	'datetime',
	'timestamp',
	'year',
	'binary',
	'byte',
	'varbinary',
	'tinyblob',
	'blob',
	'mediumblob',
	'longblob',
]
