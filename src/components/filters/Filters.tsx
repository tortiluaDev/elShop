'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/ui/Button'

import styles from './filters.module.scss'

export function Filters() {
	const [category, setCategory] = useState('')
	const searchParams = new URLSearchParams()
	const router = useRouter()

	const onClickHandler = (category: string) => {
		setCategory(category)
		searchParams.set('category', category)
		router.push(`?${searchParams}`)
	}

	return (
		<div className={styles.filters}>
			<Button
				className={category === 'all' ? styles.active : ''}
				onClick={() => {
					setCategory('all')
					router.push('/')
				}}
			>
				Все
			</Button>
			<Button
				className={category === 'iphones' ? styles.active : ''}
				onClick={() => onClickHandler('iphones')}
			>
				Телефоны
			</Button>
			<Button
				className={category === 'GPUs' ? styles.active : ''}
				onClick={() => onClickHandler('GPUs')}
			>
				Видеокарты
			</Button>
			<Button
				className={category === 'consoles' ? styles.active : ''}
				onClick={() => onClickHandler('consoles')}
			>
				Консоли
			</Button>
		</div>
	)
}
