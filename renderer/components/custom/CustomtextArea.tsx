import { ChangeEvent, CSSProperties } from 'react'

type Props = {
  name: string
  containerStyles?: CSSProperties
  changeEvent: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomTextArea = ({ name, containerStyles = {}, changeEvent }: Props) => {
  return (
    <div className={'custom-textarea-container'} style={containerStyles}>
      <div className={'custom-textarea-label'}>{name}</div>
      <textarea className={'custom-textarea-content'} onChange={changeEvent} />
    </div>
  )
}

export default CustomTextArea
