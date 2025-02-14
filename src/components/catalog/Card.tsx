import Image from 'next/image'

import { Button } from '@/ui/Button'

import { nameFormatter } from '@/utils/nameFormatter'
import { priceFormatter } from '@/utils/priceFormatter'

import { IProduct } from '@/types/products.types'

export function Card({ name, price, img, ...other }: IProduct) {
	const formattedPrice = priceFormatter(price)
	const formattedName = nameFormatter(name)

	return (
		<div className='border border-gray w-[300px] h-[450px] p-4'>
			<Image
				alt={name}
				src={img}
				className='bg-gray'
				width={300}
				height={300}
			/>
			<p className='text-xl font-semibold mt-1 mb-1'>{formattedName}</p>
			<p className='text-gray text-lg mb-3'>id: {other.id}</p>
			<p className='text-2xl font-semibold mb-2'>{formattedPrice}₽</p>
			<Button className='bg-primary text-white px-4 py-2 hover:bg-primaryActive transition-colors w-[100%]'>
				Заказать
			</Button>
		</div>
	)
}
