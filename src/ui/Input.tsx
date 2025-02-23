import { InputHTMLAttributes, ReactNode } from 'react'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	children?: ReactNode
	containerRef?: React.RefObject<HTMLDivElement | null>
}

export function Input({ children, className, containerRef, ...props }: InputProps) {
	return (
		<div
			className={`${className}`}
			ref={containerRef}
		>
			<input {...props} />
			<div>{children}</div>
		</div>
	)
}
