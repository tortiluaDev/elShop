import { Header } from '@/components/Header'
import { Cards } from '@/components/catalog/Cards'
import { Filters } from '@/components/filters/Filters'
import { Search } from '@/components/search/Search'

export default function Home() {
	return (
		<>
			<header>
				<Header />
			</header>
			<section>
				<Search />
				<Filters />
				<Cards />
			</section>
		</>
	)
}
