export type Products = IProductExt[]

export interface IProduct {
	name: string
	price: number
	img: string
	id: string
}

export interface IProductExt extends IProduct {
	colors?: string[]
	brands?: string[]
	version?: string[]
}
