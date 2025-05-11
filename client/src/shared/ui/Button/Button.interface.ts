import type { ButtonHTMLAttributes, ReactNode } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	color?: 'primary' | 'secondary' | 'transparent'
	children: ReactNode
	onClickFunc?: () => void
}