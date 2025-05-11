import {
	initialRegisterFormState,
	registerFormReducer,
} from '@features/auth/model/registerFormReducer'
import { Button, Input } from '@shared/ui'
import { useReducer, type ChangeEvent, type FormEvent } from 'react'
import styles from './RegisterForm.module.scss'

export default function RegisterForm() {
	const [formState, dispatchForm] = useReducer(
		registerFormReducer,
		initialRegisterFormState
	)

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		const name = event.target.name as
			| 'name'
			| 'email'
			| 'password'
			| 'confirmedPassword'
		const value = event.target.value
		dispatchForm({ type: 'UPDATE_FIELD', payload: { name, value } })
		dispatchForm({ type: 'VALIDATE_FIELD', payload: { name } })
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
	}

	return (
		<form className={styles['register-form']} onSubmit={handleSubmit}>
			<div className={styles['inputs-wrapper']}>
				<Input
					name='name'
					placeholder='Введите ваше имя'
					value={formState.values.name}
					onChange={handleChange}
					error={formState.errors.name}
				/>
				<Input
					name='email'
					placeholder='Введите ваш e-mail'
					value={formState.values.email}
					onChange={handleChange}
					error={formState.errors.email}
				/>
				<Input
					name='password'
					placeholder='Введите пароль'
					value={formState.values.password}
					onChange={handleChange}
					error={formState.errors.password}
				/>
				<Input
					name='confirmedPassword'
					placeholder='Подтвердите пароль'
					value={formState.values.confirmedPassword}
					onChange={handleChange}
					error={formState.errors.confirmedPassword}
				/>
			</div>
			<Button disabled={formState.isLoading}>Зарегистрироваться</Button>
		</form>
	)
}
