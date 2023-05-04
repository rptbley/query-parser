import CustomSelectBox from 'renderer/components/custom/CustomSelectBox'
import CustomTextArea from 'renderer/components/custom/CustomtextArea'

const Home = () => {
  return (
    <div className={'content'}>
      <div className={'add-container'}>
        <CustomTextArea name={'add Procedure'} changeEvent={() => { }} />
        <div>
          <CustomSelectBox placeholder={'choose table'} optionList={[]} />
        </div>
      </div>
    </div>
  )
}

export default Home
