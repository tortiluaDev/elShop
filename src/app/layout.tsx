import type { Metadata } from 'next'
import { JetBrains_Mono } from 'next/font/google'

import { Provider } from '../Providers'

import './globals.scss'

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['cyrillic', 'latin']
})

export const metadata: Metadata = {
	title: 'Интернет-магазин электроники',
	description: 'Описание'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${jetbrainsMono.variable} antialiased`}>
				<Provider>{children}</Provider>
			</body>
		</html>
	)
}
