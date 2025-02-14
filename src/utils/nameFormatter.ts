export function nameFormatter(name: string): string {
	const formattedName = name.split('')
	if (formattedName.length > 18) {
		formattedName.splice(15)
		formattedName.push('...')
	}

	return formattedName.join('')
}
