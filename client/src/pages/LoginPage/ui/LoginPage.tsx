import { LoginForm } from '@features/auth/ui/index'
import { Heading } from '@shared/ui/index'
import { Link } from 'react-router'
import styles from './LoginPage.module.scss'

function LoginPage() {
	return (
		<div className='container'>
			<div className={styles['login-page']}>
				<div className={styles['login-page-inner']}>
					<Heading level='1'>Вход</Heading>
					<LoginForm />
					<div className={styles['links']}>
						<p>Нет учётной записи?</p>
						<Link to={'/register'}>Зарегистрироваться</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export const Component = LoginPage
