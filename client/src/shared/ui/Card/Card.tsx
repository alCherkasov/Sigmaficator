import cn from 'classnames'
import type { CardProps } from './Card.interface'
import styles from './Card.module.scss'

export function Card({ children, color = 'main' }: CardProps) {
	const cardClass = cn(styles['card'], styles[color])

	return <div className={cardClass}>{children}</div>
}
