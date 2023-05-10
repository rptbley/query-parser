import { AppProps } from 'next/app'
import Layout from '../components/layout'
import { RecoilRoot } from 'recoil'
import '@styles/global.css'
import '@styles/layout.css'
import '@styles/customs.css'
import '@styles/home.css'

const App = ({ pageProps, Component }: AppProps) => {
	return (
		<RecoilRoot>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</RecoilRoot>
	)
}

export default App
