// сервис для корзины и избранного
import { API_URL } from '@/constants/globals'

import { axiosClassic } from '@/api/axios'

import { Products } from '@/types/products.types'

class StorageService {
	_CART = '/cart'

	getCart() {
		return axiosClassic.get<Products>(`${API_URL}${this._CART}/products`)
	}

	addProductToCart(id: string, count: number = 1) {
		return axiosClassic.post<Products>(`${API_URL}${this._CART}/addProduct/${id}`, { count })
	}

	deleteProductFromCart(id: string) {
		return axiosClassic.delete<Products>(`${API_URL}${this._CART}/deleteProduct/${id}`)
	}
}

export const storageService = new StorageService()
