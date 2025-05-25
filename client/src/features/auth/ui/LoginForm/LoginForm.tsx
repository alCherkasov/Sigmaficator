import { useLoginUserMutation } from '@features/auth/api/auth.api'
import { setCredentials } from '@features/auth/model/auth.slice'
import {
	initialLoginFormState,
	loginFormReducer,
} from '@features/auth/model/loginFormReducer'
import {
	validateEmail,
	validatePassword,
} from '@features/auth/model/validation'
import { useAppDispatch } from '@shared/lib/hooks/reduxHooks'
import { Button, Input } from '@shared/ui'
import { useReducer, type ChangeEvent, type FormEvent } from 'react'
import { useNavigate } from 'react-router'
import styles from './LoginForm.module.scss'

export default function LoginForm() {
	const [formState, dispatchForm] = useReducer(
		loginFormReducer,
		initialLoginFormState
	)
	const [loginUser, { isLoading }] = useLoginUserMutation()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const name = event.target.name as 'email' | 'password'
		const value = event.target.value
		dispatchForm({ type: 'UPDATE_FIELD', payload: { name, value } })
		dispatchForm({ type: 'VALIDATE_FIELD', payload: { name } })
	}

	const handleSubmit = async (
		event: FormEvent<HTMLFormElement>
	): Promise<void> => {
		event.preventDefault()

		const { email, password } = formState.values

		const emailError = validateEmail(email)
		const passwordError = validatePassword(password)

		const fields: (keyof typeof formState.values)[] = ['email', 'password']
		for (const field of fields) {
			dispatchForm({ type: 'VALIDATE_FIELD', payload: { name: field } })
		}

		if (emailError || passwordError) return

		try {
			const response = await loginUser(formState.values).unwrap()
			if (response.token) {
				console.log(response.token)
				dispatch(setCredentials({ ...response, isAuth: true }))
				navigate('/home/dashboard', { replace: true })
			}
		} catch (error) {
			console.log(error)
		} finally {
			dispatchForm({ type: 'CLEAR' })
		}
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
			<Button disabled={isLoading}>Войти</Button>
		</form>
	)
}
