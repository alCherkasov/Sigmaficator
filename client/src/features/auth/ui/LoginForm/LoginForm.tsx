import {
	initialLoginFormState,
	loginFormReducer,
} from '@features/auth/model/loginFormReducer'
import { Button, Input } from '@shared/ui'
import { useReducer, type ChangeEvent, type FormEvent } from 'react'
import styles from './LoginForm.module.scss'

export default function LoginForm() {
	const [formState, dispatchForm] = useReducer(
		loginFormReducer,
		initialLoginFormState
	)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name as 'email' | 'password'
		const value = event.target.value
		dispatchForm({ type: 'UPDATE_FIELD', payload: { name, value } })
		dispatchForm({ type: 'VALIDATE_FIELD', payload: { name } })
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return (
		<form className={styles['login-form']} onSubmit={handleSubmit}>
			<div className={styles['inputs-wrapper']}>
				<Input
					name='email'
					placeholder='Введите ваш e-mail'
					value={formState.values.email}
					onChange={handleChange}
					error={formState.errors.email}
				/>
				<Input
					name='password'
					type='password'
					placeholder='Введите ваш пароль'
					value={formState.values.password}
					onChange={handleChange}
					error={formState.errors.password}
				/>
			</div>
			<Button disabled={formState.isLoading}>Войти</Button>
		</form>
	)
}
