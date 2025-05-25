import cn from 'classnames'
import { type ReactElement } from 'react'
import type { JSX } from 'react/jsx-dev-runtime'
import type { HeadingProps } from './Heading.interface'
import { sizeSheet } from './Heading.interface'
import styles from './Heading.module.scss'

export function Heading({
	level,
	children,
	color = 'main',
	weight = 'accent',
}: HeadingProps): ReactElement {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements
	const headingClass = cn(
		styles['heading'],
		sizeSheet[level],
		styles[color],
		styles[weight]
	)

	return <Tag className={headingClass}>{children}</Tag>
}
