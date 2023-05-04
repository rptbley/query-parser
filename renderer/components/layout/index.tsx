import SideBar from './SideBar'

const Layout = ({ children }) => {
  return (
    <div className={'main'}>
      <div className={'layout-container'}>
        <div className={'title'}>QUERY PARSER</div>
        <SideBar />
        <div className={'content-container'}>{children}</div>
      </div>
    </div>
  )
}

export default Layout
