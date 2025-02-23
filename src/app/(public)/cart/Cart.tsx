'use client'

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import Image from 'next/image'
import { useMemo } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

import { Button } from '@/ui/Button'

import { priceFormatter } from '@/utils/priceFormatter'

import { storageService } from '@/services/storage.service'
import { IForm } from '@/types/form.types'
import { Products } from '@/types/products.types'

import styles from './cart.module.scss'

export default function Cart() {
	const queryClient = useQueryClient()

	const { data, isLoading, isError } = useQuery({
		queryKey: ['cart'],
		queryFn: async () => await storageService.getCart()
	})
	const { mutate } = useMutation({
		mutationKey: ['deleteCart'],
		mutationFn: async () => await storageService.deleteCart(),
		onSuccess: () => queryClient.invalidateQueries({ queryKey: ['cart'] })
	})

	const { register, handleSubmit, formState, reset, control } = useForm<IForm>({
		mode: 'onChange'
	})

	const nameError = formState.errors.name?.message
	const emailError = formState.errors.email?.message

	const onSubmit: SubmitHandler<IForm> = personData => {
		console.log(orderCreate(personData, data?.data))
		mutate()
		reset()
	}

	const totalPrice = useMemo(() => {
		return data?.data.reduce((acc, product) => acc + product.price, 0)
	}, [data?.data])

	const orderCreate = (personData: IForm, cart: Products | undefined) => {
		return { personData, cart }
	}

	return (
		<div className={styles.cart_block}>
			{!isLoading && !isError && (
				<div className={styles.cart_products}>
					<ul>
						{data?.data.map(product => (
							<li key={product.id}>
								<Image
									alt={product.name}
									src={product.img}
									width={80}
									height={80}
								/>
								<div>
									<p>{product.name}</p>
									<p>Стоимость {priceFormatter(product.price)}₽</p>
								</div>
							</li>
						))}
					</ul>
					<div />
					<p>Итого: {priceFormatter(totalPrice || 0)}₽</p>
				</div>
			)}

			<div>
				<form
					action=''
					className={styles.form}
					onSubmit={handleSubmit(onSubmit)}
				>
					<p>Форма заказа</p>
					<label>
						Введите имя
						<br />
						<input
							type='text'
							placeholder='Иван'
							{...register('name', {
								required: 'Заполните это поле'
							})}
						/>
						{nameError && <p className='text-red-500 text-base'>{nameError}</p>}
					</label>
					<label>
						Введите эл почту
						<br />
						<input
							type='text'
							placeholder='email@gmail.com'
							{...register('email', {
								required: 'Заполните это поле',
								pattern: {
									value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
									message: 'Некорректный email'
								}
							})}
						/>
						{emailError && <p className='text-red-500 text-base'>{emailError}</p>}
					</label>
					<Controller
						name='isNeededNews'
						control={control}
						render={({ field }) => (
							<div className='flex justify-center items-center'>
								<input
									type='checkbox'
									onClick={() => field.onChange(!field.value)}
								/>
								<p className='text-sm ml-4'>
									{!!field.value
										? 'Я разрешаю отправлять рассылку'
										: 'Я не разрешаю отправлять рассылку'}
								</p>
							</div>
						)}
					/>
					<Button>Отправить</Button>
				</form>
			</div>
		</div>
	)
}
