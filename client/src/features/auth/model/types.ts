export interface ILoginFormState {
	isValid: {
		email: boolean
		password: boolean
	}
	values: {
		email: string
		password: string
	}
	errors: {
		email: string | null
		password: string | null
	}
	isLoading: boolean,
}

export interface IRegisterFormState {
	isValid: {
		name: boolean
		email: boolean
		password: boolean
		confirmedPassword: boolean
	}
	values: {
		name: string
		email: string
		password: string
		confirmedPassword: string
	}
	errors: {
		name: string | null
		email: string | null
		password: string | null
		confirmedPassword: string | null
	}
	isLoading: boolean,
}

export type LoginFormAction = 
| {type: 'SUBMIT'}
| {type: 'SUBMIT_END'}
| {type: 'CLEAR'}
| {type: 'UPDATE_FIELD', payload: {name: 'email' | 'password', value: string}}
| {type: 'VALIDATE_FIELD', payload: {name: 'email' | 'password'}}

export type RegisterFormAction = 
| {type: 'SUBMIT'}
| {type: 'SUBMIT_END'}
| {type: 'CLEAR'}
| {type: 'UPDATE_FIELD', payload: {name: 'name' | 'email' | 'password' | 'confirmedPassword', value: string}}
| {type: 'VALIDATE_FIELD', payload: {name: 'name' | 'email' | 'password' | 'confirmedPassword'}}