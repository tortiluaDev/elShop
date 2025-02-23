import { Metadata } from 'next'

import Cart from './Cart'

export const revalidate = 100
export const dynamic = 'force-static'

export const metadata: Metadata = {
	title: 'Cart',
	description: 'Cart of TechMoll',
	alternates: {
		canonical: '/cart'
	}
}

export default function CartPage() {
	return <Cart />
}
