// сервис для получения товаров, фильтрации и поиска
import { axiosClassic } from '@/api/axios'

import { Products } from '@/types/products.types'

class CatalogService {
	_PRODUCTS = '/products'

	getAll() {
		return axiosClassic.get<Products>(this._PRODUCTS)
	}
}

export const catalogService = new CatalogService()
