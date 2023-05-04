type Props = {
  placeholder: string
  optionList: any[]
}

const CustomSelectBox = ({ placeholder, optionList }: Props) => {
  return (
    <select>
      <option>{placeholder}</option>
      {optionList.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  )
}

export default CustomSelectBox
