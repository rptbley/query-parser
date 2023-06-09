import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
	return (
		<Html>
			<Head />
			<body>
				<Main />
				<div id={'root-portal'}></div>
				<NextScript />
			</body>
		</Html>
	)
}
