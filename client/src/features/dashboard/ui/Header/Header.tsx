import { Button, Icon, UserAvatar } from '@shared/ui/index'
import type { ReactElement } from 'react'
import type { HeaderProps } from './Header.interface'
import styles from './Header.module.scss'

export function Header({ userName }: HeaderProps): ReactElement {
	const ruDateFormatter = new Intl.DateTimeFormat('ru-Ru', {
		weekday: 'short',
		day: 'numeric',
		month: 'long',
	})
	const today = ruDateFormatter.format(new Date())

	return (
		<header className={styles['header']}>
			<UserAvatar />
			<div className={styles['welcome-wrapper']}>
				<div className={styles['name-wrapper']}>
					<p>Добро пожаловать,</p>
					<p>{userName}</p>
				</div>
				<p className={styles['today']}>Сегодня {today}</p>
			</div>
			<Button color='secondary' round={true}>
				<Icon id='bell' />
			</Button>
		</header>
	)
}
