import { CSSProperties } from 'react'

type Props = {
  buttonName: string
  style?: CSSProperties
  onClick: () => void
}

const CustomButtonDefault = ({ buttonName, style = {}, onClick }: Props) => {
  return (
    <button className={'custom-button-default'} onClick={onClick} style={style}>
      {buttonName}
    </button>
  )
}

export default CustomButtonDefault
