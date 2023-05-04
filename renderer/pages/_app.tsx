import { AppProps } from 'next/app'
import Layout from '../components/layout'
import '@styles/global.css'
import '@styles/layout.css'
import '@styles/customs.css'
import '@styles/home.css'

const App = ({ pageProps, Component }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App
