export type Products = IProductExt[]

export interface IProduct {
	name: string
	price: number
	img: string
	id: string
}

interface IProductExt extends IProduct {
	colors?: string[]
	brands?: string[]
	version?: string[]
}

// interface IProductIphone extends IProduct {
// 	colors: string[]
// }

// interface IProductGPU extends IProduct {
// 	brands: string[]
// }

// interface IProductConsole extends IProduct {
// 	version: string[]
// }

// interface IProducts {
// 	iphones: IProductIphone[]
// 	GPUs: IProductGPU[]
// 	consoles: IProductConsole[]
// }
