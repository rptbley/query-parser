import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { goToParser, goToTableManagement } from 'renderer/links'

type SideBarMenu = {
  pathname: string
  onClick: () => void
  menuName: string
}

const SideBar = () => {
  const router = useRouter()
  const [currentMenu, setCurrentMenu] = useState<string>('')
  const goToParserPage = goToParser({ type: 'push', query: '' })
  const goToTableManagementPage = goToTableManagement({ type: 'push', query: '' })

  useEffect(() => {
    setCurrentMenu(router.pathname)
  }, [router])

  const SIDE_BAR_MENU_LIST: SideBarMenu[] = [
    { pathname: '/home', onClick: () => goToParserPage(), menuName: 'PARSE QUERY' },
    { pathname: '/table/management', onClick: () => goToTableManagementPage(), menuName: 'MANAGE TABLE' },
  ]

  return (
    <div className={'side-bar'}>
      {SIDE_BAR_MENU_LIST.map((menu: SideBarMenu, index: number) => (
        <div key={`side-bar_${index}`} className={`side-bar-menu ${menu.pathname === currentMenu ? 'side-bar-menu-active' : ''}`} onClick={menu.onClick}>
          <span>{menu.menuName}</span>
        </div>
      ))}
    </div>
  )
}

export default SideBar
