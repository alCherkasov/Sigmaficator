import type { CounterProps } from './Counter.interface'
import styles from './Counter.module.scss'

export function Counter({ value, text }: CounterProps) {
	return (
		<div className={styles['wrapper']}>
			<span className={styles['counter']}>{value}</span>
			{text && <span className={styles['desc']}>{text}</span>}
		</div>
	)
}
