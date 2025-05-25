import { circularProgressBarConfig } from '@features/dashboard/model/circularProgressBarConfig'
import { Card, Counter } from '@shared/ui'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import styles from './CaloriesCard.module.scss'

export function CaloriesCard() {
	return (
		<Card>
			<div className={styles['body']}>
				<div className={styles['progress-bar-wrapper']}>
					<CircularProgressbar
						value={2250}
						minValue={0}
						maxValue={3000}
						text='2250'
						styles={circularProgressBarConfig}
					/>
				</div>
				<Counter value={750} text='осталось' />
			</div>
		</Card>
	)
}
