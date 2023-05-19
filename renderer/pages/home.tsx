import ProcedureEditCard from 'renderer/components/home/ProcedureEditCard'
import ProcedureWriteCard from 'renderer/components/home/ProcedureWriteCard'

const Home = () => {
	return (
		<div className={'content'}>
			<div className={'card-container'}>
				<ProcedureWriteCard />
				<ProcedureEditCard />
			</div>
		</div>
	)
}

export default Home
