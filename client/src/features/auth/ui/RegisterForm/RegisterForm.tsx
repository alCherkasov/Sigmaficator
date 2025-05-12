import { useRegisterUserMutation } from '@features/auth/api/auth.api'
import { setCredentials } from '@features/auth/model/auth.slice'
import {
	initialRegisterFormState,
	registerFormReducer,
} from '@features/auth/model/registerFormReducer'
import {
	validateConfirmedPassword,
	validateEmail,
	validateName,
	validatePassword,
} from '@features/auth/model/validation'
import { useAppDispatch } from '@shared/hooks/reduxHooks'
import { Button, Input } from '@shared/ui'
import { useReducer, type ChangeEvent, type FormEvent } from 'react'
import styles from './RegisterForm.module.scss'

export default function RegisterForm() {
	const [formState, dispatchForm] = useReducer(
		registerFormReducer,
		initialRegisterFormState
	)
	const [registerUser, { isLoading }] = useRegisterUserMutation()
	const dispatch = useAppDispatch()

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const name = event.target.name as
			| 'name'
			| 'email'
			| 'password'
			| 'confirmedPassword'
		const value = event.target.value
		dispatchForm({ type: 'UPDATE_FIELD', payload: { name, value } })
		dispatchForm({ type: 'VALIDATE_FIELD', payload: { name } })
	}

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>
	): Promise<void> => {
		event.preventDefault()

		const { name, email, password, confirmedPassword } = formState.values

		const nameError = validateName(name)
		const emailError = validateEmail(email)
		const passworderror = validatePassword(password)
		const confirmedPasswordError = validateConfirmedPassword(
			password,
			confirmedPassword
		)

		const fields: (keyof typeof formState.values)[] = [
			'name',
			'email',
			'password',
			'confirmedPassword',
		]
		for (const field of fields) {
			dispatchForm({ type: 'VALIDATE_FIELD', payload: { name: field } })
		}

		if (nameError || emailError || passworderror || confirmedPasswordError)
			return

		try {
			const response = await registerUser(formState.values).unwrap()
			dispatch(setCredentials({ ...response, isAuth: true }))
		} catch (error) {
			console.log(error)
		} finally {
			dispatchForm({ type: 'CLEAR' })
		}
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
					type='password'
					placeholder='Введите пароль'
					value={formState.values.password}
					onChange={handleChange}
					error={formState.errors.password}
				/>
				<Input
					name='confirmedPassword'
					type='password'
					placeholder='Подтвердите пароль'
					value={formState.values.confirmedPassword}
					onChange={handleChange}
					error={formState.errors.confirmedPassword}
				/>
			</div>
			<Button disabled={isLoading}>Зарегистрироваться</Button>
		</form>
	)
}
