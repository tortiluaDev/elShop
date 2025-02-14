'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'

import { Card } from './Card'
import { catalogService } from '@/services/catalog.service'

export function Cards() {
	const { data, isLoading, isError } = useQuery({
		queryKey: ['products'],
		queryFn: () => catalogService.getAll()
	})

	const searchParams = useSearchParams()
	const searchName = searchParams.get('name')
	const searchCategory = searchParams.get('category')

	return (
		<div className='flex flex-wrap basis-1/5 items-center justify-between gap-8 columns-4'>
			{data?.data.map(product => {
				if (!searchName && !searchCategory)
					return (
						<Card
							key={product.id}
							{...product}
						/>
					)
				else if (searchName && product.name.toLowerCase().includes(searchName.toLowerCase())) {
					return (
						<Card
							key={product.id}
							{...product}
						/>
					)
				} else if (searchCategory) {
					if (searchCategory === 'iphones' && product.id.startsWith('10')) {
						return (
							<Card
								key={product.id}
								{...product}
							/>
						)
					} else if (searchCategory === 'GPUs' && product.id.startsWith('11')) {
						return (
							<Card
								key={product.id}
								{...product}
							/>
						)
					} else if (searchCategory === 'consoles' && product.id.startsWith('12')) {
						return (
							<Card
								key={product.id}
								{...product}
							/>
						)
					}
				}
			})}
		</div>
	)
}
