import type { IRegisterFormState, RegisterFormAction } from './types'
import { validateConfirmedPassword, validateEmail, validateName, validatePassword } from './validation'

export const initialRegisterFormState: IRegisterFormState = {
	isValid: {
		name: true,
		email: true,
		password: true,
		confirmedPassword: true
	},
	values: {
		name: '',
		email: '',
		password: '',
		confirmedPassword: ''
	},
	errors: {
		name: null,
		email: null,
		password: null,
		confirmedPassword: null
	},
	isLoading: false
}

export function registerFormReducer(state: IRegisterFormState, action: RegisterFormAction): IRegisterFormState {
	switch(action.type) {
		case 'CLEAR': 
			return initialRegisterFormState
		case 'UPDATE_FIELD': {
			const {name, value} = action.payload
			return {...state, values: {...state.values, [name]: value}}
		}
		case 'VALIDATE_FIELD': {
			const name = action.payload.name
			const value = state.values[name]

			const validationFunctions = {
				name: validateName,
				email: validateEmail,
				password: validatePassword,
				confirmedPassword: () => validateConfirmedPassword(state.values.password, state.values.confirmedPassword)
			}

			const validate = validationFunctions[name]
			const error = validate ? validate(value) : null
			if(error) {
				return {
					...state,
					isValid: {...state.isValid, [name]: false},
					errors: {...state.errors, [name]: error}
				}
			}
			return {
				...state,
				isValid: {...state.isValid, [name]: true},
				errors: {...state.errors, [name]: null}
			}
		}
		default:
			return state
	}
}