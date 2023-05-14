type CustomButtonProps = {
	className?: string
	buttonName: string
	onClick: () => void
}

const CustomButton = ({ className, buttonName, onClick }: CustomButtonProps) => {
	return (
		<button className={`custom-button ${className}`} onClick={onClick}>
			{buttonName}
		</button>
	)
}

export default CustomButton
