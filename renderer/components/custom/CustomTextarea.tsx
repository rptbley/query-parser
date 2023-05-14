import { ChangeEvent } from 'react'

type CustomTextareaProps = {
	className?: string
	placeholder?: string
	defaultValue: string
	onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomTextarea = ({ className, placeholder, defaultValue, onChange }: CustomTextareaProps) => {
	return <textarea className={`custom-textarea ${className}`} placeholder={placeholder} defaultValue={defaultValue} onChange={onChange} />
}

export default CustomTextarea
