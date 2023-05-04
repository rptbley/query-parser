import { useRouter } from 'next/router'

type LinkProps = {
  type: 'push' | 'replace'
  query?: any
}

export const goToTableManagement = ({ type = 'push', query = {} }: LinkProps) => {
  const router = useRouter()

  return () => {
    router[type]({ pathname: '/table/management', query: query })
  }
}

export const goToParser = ({ type = 'push', query = {} }: LinkProps) => {
  const router = useRouter()

  return () => {
    router[type]({ pathname: '/home', query: query })
  }
}
