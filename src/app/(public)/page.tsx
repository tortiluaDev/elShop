import { Header } from '@/components/Header'
import { Cards } from '@/components/catalog/Cards'
import { Filters } from '@/components/filters/Filters'
import { SearchContainer } from '@/components/search/SearchContainer'

export default function Home() {
	return (
		<div className='p-4 h-screen'>
			<header>
				<Header />
			</header>
			<section>
				<SearchContainer />
				<Filters />
				<Cards />
			</section>
		</div>
	)
}
