'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

import { useSearchStore } from '@/store/searchStore'

import { Search } from './Search'

export function SearchContainer() {
	const router = useRouter()
	const newParams = new URLSearchParams()

	const [inputQuery, setInputQuery] = useState('')
	const addToHistory = useSearchStore(state => state.addToHistory)
	const setQuery = useSearchStore(state => state.setQuery)
	const query = useSearchStore(state => state.query)
	const history = useSearchStore(state => state.history)

	const [isOpenPopup, setIsOpenPopup] = useState(false)
	const searchRef = useRef<HTMLDivElement>(null)
	const popupRef = useRef<HTMLDivElement>(null)

	// Закрытие попапа при клике вне области поиска
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				searchRef.current &&
				!searchRef.current.contains(event.target as Node) &&
				popupRef.current &&
				!popupRef.current.contains(event.target as Node)
			) {
				setIsOpenPopup(false)
			}
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

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			handleSearch()
		}
	}

	// Сброс значения при изменении запроса
	useEffect(() => {
		setInputQuery('')
		setIsOpenPopup(false)
	}, [query])

	return (
		<Search
			searchRef={searchRef}
			popupRef={popupRef}
			inputQuery={inputQuery}
			setInputQuery={setInputQuery}
			handleKeyPress={handleKeyPress}
			handleSearch={handleSearch}
			isOpenPopup={isOpenPopup}
			history={history}
			setIsOpenPopup={setIsOpenPopup}
		/>
	)
}
