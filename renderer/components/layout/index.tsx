import SideBar from './SideBar'

const Layout = ({ children }) => {
	return (
		<div className={'main'}>
			<div className={'layout-container'}>
				<div className={'title'}>
					<span>QUERY PARSER</span>
				</div>
				<SideBar />
				{children}
			</div>
		</div>
	)
}

export default Layout
