import { RegisterForm } from '@features/auth/ui'
import { Heading } from '@shared/ui'
import { Link } from 'react-router-dom'
import styles from './RegisterPage.module.scss'

function RegisterPage() {
	return (
		<div className='container'>
			<div className={styles['register-page']}>
				<div className={styles['register-page-inner']}>
					<Heading level='1'>Регистрация</Heading>
					<RegisterForm />
					<div className={styles['links']}>
						<p>Уже есть учётная запись?</p>
						<Link to={'/login'}>Войти</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export const Component = RegisterPage
