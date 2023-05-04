type Props = {
  placeholder: string
  optionList: any[]
}

const CustomSelectBox = ({ placeholder, optionList }: Props) => {
  return (
    <div className={'custom-select-container'}>
      <div className={'custom-selected'}>
        <div>{placeholder}</div>
        <div className={'custom-dropdown-arrow'}>down</div>
      </div>
      <ul className={'custom-option-container'}>
        <li className={'custom-option'}>test</li>
      </ul>
    </div>
  )
}

export default CustomSelectBox
