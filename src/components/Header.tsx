'use client'

import { useQuery } from '@tanstack/react-query'
import { ShoppingCart } from 'lucide-react'

import { Button } from '@/ui/Button'

import { storageService } from '@/services/storage.service'

export function Header() {
	const { data } = useQuery({
		queryKey: ['cart'],
		queryFn: async () => storageService.getCart()
	})

	return (
		<div className='flex gap-12 justify-between px-4 py-3 font-bold items-center border-b-gray border-b mb-8'>
			<h1 className='text-2xl'>ElecShop</h1>
			<div className='flex items-center gap-8 border border-primary hover:border-primaryActive transition-colors'>
				<p className='text-center pl-4'>Товаров в корзине: {`${data?.data.length || 0}`}</p>
				<Button className='bg-primary text-white px-4 py-2 hover:bg-primaryActive transition-colors'>
					<ShoppingCart />
				</Button>
			</div>
		</div>
	)
}
