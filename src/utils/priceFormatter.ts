export function priceFormatter(price: number): string {
	const formatPrice = price.toString().split('')

	switch (formatPrice.length) {
		case 4:
			formatPrice.splice(1, 0, '.')
			break
		case 5:
			formatPrice.splice(2, 0, '.')
			break
		case 6:
			formatPrice.splice(3, 0, '.')
			break
	}

	return formatPrice.join('')
}
