import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface ISearchStore {
	query: string
	history: string[]
	setQuery: (query: string) => void
	addToHistory: (query: string) => void
	deleteFromHistory: (queryId: number) => void
	removeHistory: () => void
}

export const useSearchStore = create<ISearchStore>()(
	persist(
		set => ({
			query: '',
			history: [],
			setQuery: query => set({ query }),
			addToHistory: query =>
				set(state => ({ history: [...new Set([query, ...state.history])].slice(0, 10) })),
			deleteFromHistory: queryId =>
				set(state => ({ history: [...state.history].filter((_, id) => id !== queryId) })),
			removeHistory: () => set({ history: [] })
		}),
		{ name: 'search-store' }
	)
)