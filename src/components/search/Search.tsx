import { SearchIcon, X } from 'lucide-react'
import { RefObject } from 'react'

import { Input } from '@/ui/Input'

import { COLORS } from '../../constants/colors.constants'

import { SearchDropdown } from './SearchDropdown'

import styles from './search.module.scss'

interface SearchProps {
	searchRef: RefObject<HTMLDivElement | null>
	popupRef: RefObject<HTMLDivElement | null>
	inputQuery: string
	setInputQuery: (value: string) => void
	handleKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void
	handleSearch: () => void
	isOpenPopup: boolean
	history: string[]
	setIsOpenPopup: (open: boolean) => void
}

export function Search(props: SearchProps) {
	return (
		<div className='relative'>
			<Input
				type='text'
				containerRef={props.searchRef}
				value={props.inputQuery}
				onChange={e => props.setInputQuery(e.target.value)}
				onKeyDown={props.handleKeyPress}
				onFocus={() => props.setIsOpenPopup(true)}
				placeholder='Поиск товаров'
				className={styles.searchInput}
			>
				{props.inputQuery.trim().length > 0 && (
					<button onClick={() => props.setInputQuery('')}>
						<X
							color={COLORS.primary}
							size={28}
							className='p-1 hover:opacity-70'
						/>
					</button>
				)}
				<button onClick={props.handleSearch}>
					<SearchIcon
						color={COLORS.primary}
						size={28}
						className='p-1 hover:opacity-70'
					/>
				</button>
			</Input>
			{props.isOpenPopup && (
				<SearchDropdown
					history={props.history}
					className={styles.dropdown}
					containerRef={props.popupRef}
				/>
			)}
		</div>
	)
}
