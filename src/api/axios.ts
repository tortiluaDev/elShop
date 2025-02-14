import axios, { CreateAxiosDefaults } from 'axios'

import { API_URL } from '@/constants/globals'

const options: CreateAxiosDefaults = {
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json'
	},
	withCredentials: true
}

export const axiosClassic = axios.create(options)
