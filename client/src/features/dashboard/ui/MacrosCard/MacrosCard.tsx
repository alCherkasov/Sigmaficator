import { Card, ProgressBar } from '@shared/ui'
import type { ReactElement } from 'react'
import styles from './MacrosCard.module.scss'

export function MacrosCard(): ReactElement {
	return (
		<Card>
			<div className={styles['body']}>
				<ProgressBar title='Белки' value={50} maxValue={150} />
				<ProgressBar title='Жиры' value={36} maxValue={80} />
				<ProgressBar title='Углеводы' value={121} maxValue={220} />
			</div>
		</Card>
	)
}
