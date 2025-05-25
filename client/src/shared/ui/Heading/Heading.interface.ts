import type { HTMLAttributes, ReactNode } from 'react'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
	level: '1' | '2' | '3' | '4' | '5'
	children: ReactNode
	color?: 'main' | 'light' | 'primary'
	weight?: 'accent' | 'semibold'
}

export const sizeSheet = {
	1: 'heading-size-xl',
	2: 'heading-size-l',
	3: 'heading-size-m',
	4: 'heading-size-s',
	5: 'heading-size-xs',
}