'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { CardContainer } from './CardContainer'
import { catalogService } from '@/services/catalog.service'
import { IProductExt } from '@/types/products.types'

export function Cards() {
	const searchParams = useSearchParams()
	const searchName = searchParams.get('name')
	const searchCategory = searchParams.get('category') as 'iphones' | 'GPUs' | 'consoles' | null

	const { data, isLoading, isError } = useQuery({
		queryKey: ['products'],
		queryFn: async () => await catalogService.getAll()
	})

	const filterProducts = (product: IProductExt) => {
		if (!searchName && !searchCategory) return true
		if (searchName && product.name.toLowerCase().includes(searchName.toLowerCase())) return true

		const categoryMap = { iphones: '10', GPUs: '11', consoles: '12' }
		return searchCategory && product.id.startsWith(categoryMap[searchCategory])
	}

	if (isLoading) return <p>Данные загружаются</p>
	if (isError) return <p>Ошибка загрузки данных</p>
	return (
		<div className='flex flex-wrap basis-1/5 items-center justify-between gap-8 columns-4'>
			{data?.data.filter(filterProducts).map(product => (
				<CardContainer
					key={product.id}
					{...product}
				/>
			))}
		</div>
	)
}
