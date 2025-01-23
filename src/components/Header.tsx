export function Header() {
	return (
		<header className='flex gap-12 justify-between px-4 py-3 font-bold items-center border-b-gray border-b mb-8'>
			<h1 className='text-2xl'>ElecShop</h1>
			<div className='flex items-center gap-8'>
				<p className='text-center'>Товаров в корзине: 0</p>
				<button className='bg-primary text-white px-4 py-2 hover:bg-primaryActive transition-colors'>
					В корзину
				</button>
			</div>
		</header>
	)
}
