import { ChangeEvent, CSSProperties, useRef } from 'react'

type Props = {
  name: string
  containerStyles?: CSSProperties
  changeEvent: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const CustomTextArea = ({ name, containerStyles = {}, changeEvent }: Props) => {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    changeEvent(e)
    textAreaRef.current.style.height = 'auto'
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px'
  }
  return (
    <div className={'custom-textarea-container'} style={containerStyles}>
      <div className={'custom-textarea-label'}>{name}</div>
      <textarea ref={textAreaRef} rows={1} className={'custom-textarea-content'} onChange={onChange} />
    </div>
  )
}

export default CustomTextArea
