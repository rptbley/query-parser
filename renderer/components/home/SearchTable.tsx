import CustomButtonDefault from '../custom/CustomButtonDefault'

const SearchTable = () => {
  return (
    <div>
      <input type={'text'} value={''} placeholder={'search table'} />
      <CustomButtonDefault buttonName={'search'} style={{ marginLeft: '0.2rem' }} onClick={() => { }} />
    </div>
  )
}

export default SearchTable
