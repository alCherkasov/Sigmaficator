import type { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'primary' | 'secondary' | 'transparent'
	round?: boolean
	children: ReactNode
	onClickFunc?: () => void
	styleOptions?: CSSProperties
}