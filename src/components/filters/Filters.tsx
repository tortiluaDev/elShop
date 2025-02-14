'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'

import { Button } from '@/ui/Button'

import styles from './filters.module.scss'

export function Filters() {
	const [category, setCategory] = useState('')
	const searchParams = new URLSearchParams()
	const router = useRouter()

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
				onClick={() => {
					setCategory('iphones')
					searchParams.set('category', 'iphones')
					router.push(`?${searchParams}`)
				}}
			>
				Телефоны
			</Button>
			<Button
				className={category === 'GPUs' ? styles.active : ''}
				onClick={() => {
					setCategory('GPUs')
					searchParams.set('category', 'GPUs')
					router.push(`?${searchParams}`)
				}}
			>
				Видеокарты
			</Button>
			<Button
				className={category === 'consoles' ? styles.active : ''}
				onClick={() => {
					setCategory('consoles')
					searchParams.set('category', 'consoles')
					router.push(`?${searchParams}`)
				}}
			>
				Консоли
			</Button>
		</div>
	)
}
