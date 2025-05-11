import type { ILoginFormState, LoginFormAction } from './types'
import { validateEmail, validatePassword } from './validation'

export const initialLoginFormState: ILoginFormState = {
	isValid: {
		email: true,
		password: true
	},
	values: {
		email: '',
		password: ''
	},
	errors: {
		email: null,
		password: null
	},
	isLoading: false
}

export function loginFormReducer(state: ILoginFormState, action: LoginFormAction): ILoginFormState {
	switch(action.type) {
		case 'SUBMIT': 
			return {...state, values: state.values, isLoading: true}
		case 'SUBMIT_END': 
			return {...state, isLoading: false}
		case 'CLEAR' : 
			return initialLoginFormState
		case 'UPDATE_FIELD': {
			const {name, value} = action.payload
			return {...state, values: {...state.values, [name]: value}}
		}
		case 'VALIDATE_FIELD': {
			const name = action.payload.name
			const value = state.values[name]

			const validateFunctions = {
				email: validateEmail,
				password: validatePassword
			}

			const validate = validateFunctions[name]
			const error = validate ? validate(value) : null
			if(error) {
				return {
					...state,
					isValid: {...state.isValid,[name]: false},
					errors: {...state.errors, [name]: error}
				}
			}
			return {
				...state,
				isValid: {...state.isValid, [name]: true},
				errors: {...state.errors, [name]: null}
			}
		}
	}
}