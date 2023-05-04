import CustomTextArea from 'renderer/components/custom/CustomtextArea'
import SearchTable from 'renderer/components/home/SearchTable'

const Home = () => {
  return (
    <div className={'content'}>
      <div className={'add-container'}>
        <CustomTextArea name={'add Procedure'} changeEvent={() => { }} />
        <SearchTable />
      </div>
    </div>
  )
}

export default Home
