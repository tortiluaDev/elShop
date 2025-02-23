import { SquareMinus, SquarePlus } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/ui/Button'

import { IProduct } from '@/types/products.types'

interface IProps {
	formattedName: string
	formattedPrice: string
	productsInCart: number
	product: Omit<IProduct, 'price'>
	addToCart: (id: string) => void
	delFromCart: (id: string) => void
}

export function Card({
	formattedName,
	formattedPrice,
	product,
	productsInCart,
	addToCart,
	delFromCart
}: IProps) {
	return (
		<div className='border border-gray w-[300px] h-[450px] p-4'>
			<Image
				alt={product.name}
				src={product.img}
				className='bg-gray'
				width={300}
				height={300}
			/>
			<p className='text-xl font-semibold mt-1 mb-1'>{formattedName}</p>
			<p className='text-gray text-lg mb-3'>id: {product.id}</p>
			<p className='text-2xl font-semibold mb-2'>{formattedPrice}₽</p>
			{productsInCart ? (
				<Button className='border-primary border text-black px-4 py-2 hover:border-primaryActive transition-colors w-[100%] flex items-center justify-between'>
					<SquareMinus
						color='black'
						onClick={() => delFromCart(product.id)}
					/>
					В корзине: {productsInCart}
					<SquarePlus
						color='black'
						onClick={() => addToCart(product.id)}
					/>
				</Button>
			) : (
				<Button
					className='bg-primary text-white px-4 py-2 hover:bg-primaryActive transition-colors w-[100%]'
					onClick={() => addToCart(product.id)}
				>
					В корзину
				</Button>
			)}
		</div>
	)
}
