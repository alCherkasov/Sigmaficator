import { type ReactElement } from 'react'
import type { JSX } from 'react/jsx-dev-runtime'
import type { HeadingProps } from './Heading.interface'
import { sizeSheet } from './Heading.interface'
import styles from './Heading.module.scss'

export default function Heading({
	level,
	children,
}: HeadingProps): ReactElement {
	const Tag = `h${level}` as keyof JSX.IntrinsicElements
	const resultClass = `${styles['heading']} ${sizeSheet[level]}`

	return <Tag className={resultClass}>{children}</Tag>
}
