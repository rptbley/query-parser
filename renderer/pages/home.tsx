import ProcedureEditCard from 'renderer/components/home/ProcedureEditCard'
import ProcedureResultCard from 'renderer/components/home/ProcedureResultCard'
import ProcedureWriteCard from 'renderer/components/home/ProcedureWriteCard'

const Home = () => {
	return (
		<div className={'content'}>
			<div className={'card-container'}>
				<ProcedureWriteCard />
				<ProcedureEditCard />
				<ProcedureResultCard />
			</div>
		</div>
	)
}

export default Home
