import { X } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { useSearchStore } from '@/store/searchStore'

interface ISearchDropdownProps {
	history: string[]
	className: string
	containerRef: React.RefObject<HTMLDivElement | null>
}

export function SearchDropdown({
	history,
	className,
	containerRef,
	...props
}: ISearchDropdownProps) {
	const router = useRouter()
	const newParams = new URLSearchParams(window.location.search)

	const handleDeleteQuery = useSearchStore(state => state.deleteFromHistory)
	const handleRemoveHistory = useSearchStore(state => state.removeHistory)
	const handleSetQuery = useSearchStore(state => state.setQuery)

	return (
		<div
			className={className}
			ref={containerRef}
			{...props}
		>
			<ul>
				<p className='mb-2'>Ваша история поиска:</p>
				{history.map((query, id) => (
					<li
						key={id}
						onClick={() => {
							handleSetQuery(query)
							newParams.set('name', query)
							router.push(`?${newParams}`)
						}}
					>
						{query}
						<button onClick={() => handleDeleteQuery(id)}>
							<X />
						</button>
					</li>
				))}
				{history.length > 0 && (
					<button
						className='mt-2 border-t-2 border-gray px-4 hover:border-primary transition-colors duration-[40ms]'
						onClick={() => handleRemoveHistory()}
					>
						Очистить историю
					</button>
				)}
			</ul>
		</div>
	)
}
