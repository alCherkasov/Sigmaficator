import {
	CaloriesCard,
	Header,
	HistoryCard,
	MacrosCard,
	WeightCard,
} from '@features/dashboard/ui'
import { AddCard } from '@features/dashboard/ui/AddCard/AddCard'
import { useAppSelector } from '@shared/lib/hooks/reduxHooks'
import { Heading } from '@shared/ui'
import { Link } from 'react-router'
import styles from './DashboardPage.module.scss'

function DashboardPage() {
	const selectUserName = useAppSelector(state => state.auth.user.name)
	return (
		<div className='container'>
			<div className={styles['dashboard-page']}>
				<Header userName={selectUserName} />
				<div className={styles['blocks']}>
					<div className={styles['block']}>
						<div className={styles['head']}>
							<Heading level='2'>Сводка</Heading>
							<Link className={styles['link']} to={'/'}>
								Список дней
							</Link>
						</div>
						<div className={styles['body']}>
							<CaloriesCard />
							<MacrosCard />
						</div>
					</div>
					<div className={styles['block']}>
						<div className={styles['head']}>
							<Heading level='2'>Питание</Heading>
						</div>
						<div className={styles['body']}>
							<HistoryCard />
							<AddCard />
						</div>
					</div>
					<div className={styles['block']}>
						<div className={styles['head']}>
							<Heading level='2'>Ваш вес</Heading>
						</div>
						<div className={styles['body']}>
							<WeightCard />
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export const Component = DashboardPage
