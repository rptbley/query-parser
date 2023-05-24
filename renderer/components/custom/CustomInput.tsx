import { ChangeEvent } from 'react'

type CustomInputProps = {
	className?: string
	placeholder: string
	defaultValue: string
	onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const CustomInput = ({ className, placeholder, defaultValue, onChange }: CustomInputProps) => {
	return <input className={`custom-input ${className}`} placeholder={placeholder} type={'text'} defaultValue={defaultValue} onChange={onChange} />
}

export default CustomInput
