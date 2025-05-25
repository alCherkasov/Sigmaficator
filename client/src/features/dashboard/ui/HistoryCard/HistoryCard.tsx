import { Heading } from '@shared/ui'
import { Link } from 'react-router-dom'
import styles from './HistoryCard.module.scss'

export function HistoryCard() {
	return (
		<Link to={'/home/history'}>
			<div className={styles['history-card']}>
				<div className={styles['body']}>
					<Heading level='2'>История</Heading>
					<p className={styles['link']}>Посмотреть</p>
				</div>
			</div>
		</Link>
	)
}
