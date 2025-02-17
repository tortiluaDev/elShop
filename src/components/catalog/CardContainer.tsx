import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { nameFormatter } from '@/utils/nameFormatter'
import { priceFormatter } from '@/utils/priceFormatter'

import { Card } from './Card'
import { storageService } from '@/services/storage.service'
import { IProductExt } from '@/types/products.types'

export function CardContainer(props: IProductExt) {
	const queryClient = useQueryClient()

	const { data } = useQuery({
		queryKey: ['cart'],
		queryFn: async () => await storageService.getCart()
	})
	const { mutate } = useMutation({
		mutationFn: async (id: string) => await storageService.addProductToCart(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
	})
	const { mutate: deleteMutate } = useMutation({
		mutationFn: async (id: string) => await storageService.deleteProductFromCart(id),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
	})

	const productsInCart = data?.data.filter(product => product.id === props.id).length || 0
	const formattedPrice = priceFormatter(props.price)
	const formattedName = nameFormatter(props.name)

	const addToCartHandler = (id: string) => {
		mutate(id)
	}
	const deleteFromCartHandler = (id: string) => {
		deleteMutate(id)
	}

	return (
		<Card
			productsInCart={productsInCart}
			product={props}
			formattedPrice={formattedPrice}
			formattedName={formattedName}
			addToCart={addToCartHandler}
			delFromCart={deleteFromCartHandler}
		/>
	)
}
