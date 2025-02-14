'use client'

import { SearchIcon, X } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { Input } from '@/ui/Input'

import { useSearchStore } from '@/store/searchStore'

import { COLORS } from '../../constants/colors.constants'

import { SearchDropdown } from './SearchDropdown'

import styles from './search.module.scss'

export function Search() {
	const router = useRouter()
	const newParams = new URLSearchParams(window.location.search)

	const [inputQuery, setInputQuery] = useState('')
	const addToHistory = useSearchStore(state => state.addToHistory)
	const setQuery = useSearchStore(state => state.setQuery)
	const query = useSearchStore(state => state.query)
	const history = useSearchStore(state => state.history)

	const [isOpenPopup, setIsOpenPopup] = useState(false)
	const searchRef = useRef<HTMLDivElement>(null)
	const popupRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target as Node) &&
				popupRef.current &&
				!popupRef.current.contains(event.target as Node)
			)
				setIsOpenPopup(false)
		}

		document.addEventListener('mousedown', handleClickOutside)

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [])

	const handleSearch = () => {
		if (inputQuery.trim()) {
			addToHistory(inputQuery.trim())
			setQuery(inputQuery.trim())

			newParams.set('name', inputQuery)
			router.push(`?${newParams}`)

			setIsOpenPopup(false)
			setInputQuery('')
		} else if (!inputQuery.length) {
			setQuery('')
			router.push('/')
		}
	}

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSearch()
		}
	}

	useEffect(() => {
		setInputQuery('')
		setIsOpenPopup(false)
	}, [query])

	return (
		<div className='relative'>
			<Input
				type='text'
				containerRef={searchRef}
				value={inputQuery}
				onChange={e => setInputQuery(e.target.value)}
				onKeyDown={handleKeyPress}
				onFocus={() => setIsOpenPopup(true)}
				placeholder='Поиск товаров'
				className={styles.searchInput}
			>
				{inputQuery.trim().length > 0 && (
					<button>
						<X
							color={COLORS.primary}
							size={28}
							className='p-1 hover:opacity-70'
							onClick={() => setInputQuery('')}
						/>
					</button>
				)}
				<button>
					<SearchIcon
						color={COLORS.primary}
						size={28}
						className='p-1 hover:opacity-70'
						onClick={() => {
							handleSearch()
						}}
					/>
				</button>
			</Input>
			{isOpenPopup && (
				<SearchDropdown
					history={history}
					className={styles.dropdown}
					containerRef={popupRef}
				/>
			)}
		</div>
	)
}
