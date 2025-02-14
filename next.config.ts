import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	reactStrictMode: true,
	poweredByHeader: false
}

export default nextConfig

module.exports = {
	images: {
		domains: ['localhost']
	}
}
