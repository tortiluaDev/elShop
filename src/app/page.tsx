import Image from 'next/image'

import { Header } from '@/components/Header'

export default function Home() {
	return (
		<>
			<Header />
			<section>
				<div>
					<input
						type='search'
						placeholder='Введите название товара'
						className='w-[100%] mb-4'
					/>
					<div className='flex justify-between mb-6'>
						<button className='focus:border-b-primary border-b border-b-gray transition-colors'>
							Фильтр 1
						</button>
						<button className='focus:border-b-primary border-b border-b-gray transition-colors'>
							Фильтр 2
						</button>
						<button className='focus:border-b-primary border-b border-b-gray transition-colors'>
							Фильтр 3
						</button>
						<button className='focus:border-b-primary border-b border-b-gray transition-colors'>
							Фильтр 4
						</button>
					</div>
					<div className='border border-gray w-[240px] p-4'>
						<Image
							alt=''
							src=''
							className='bg-gray'
							width={240}
							height={200}
						/>
						<p className='text-xl font-semibold mt-1 mb-1'>Название</p>
						<p className='text-gray text-lg mb-3'>Описание</p>
						<p className='text-2xl font-semibold mb-2'>3290p</p>
						<button className='bg-primary text-white px-4 py-2 hover:bg-primaryActive transition-colors w-[100%]'>
							Заказать
						</button>
					</div>
				</div>
			</section>
		</>
	)
}
