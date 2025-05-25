import { Button, Heading } from '@shared/ui'
import { Link } from 'react-router'
import styles from './AddCard.module.scss'

export function AddCard() {
	return (
		<Link to={'/home/meals'}>
			<div className={styles['add-card']}>
				<div className={styles['body']}>
					<Heading level='3' color='light' weight='semibold'>
						Добавьте приём&nbsp;пищи
					</Heading>
					<Button color='secondary'>Добавить</Button>
				</div>
			</div>
		</Link>
	)
}
