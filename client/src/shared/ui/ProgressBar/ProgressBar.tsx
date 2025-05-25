import { getPercantage } from '@shared/lib/utils/utils'
import type { ProgressBarProps } from './ProgressBar.interface'
import styles from './ProgressBar.module.scss'

export function ProgressBar({ value, maxValue, title }: ProgressBarProps) {
	return (
		<div className={styles['wrapper']}>
			<p className={styles['title']}>{title}</p>
			<div className={styles['progress-bar']}>
				<div
					className={styles['progress']}
					style={{ width: `${getPercantage(value, maxValue)}%` }}
				/>
			</div>
			<p className={styles['counter']}>
				{value} / {maxValue}г
			</p>
		</div>
	)
}
