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

export type LoginFormAction = 
| {type: 'SUBMIT'}
| {type: 'SUBMIT_END'}
| {type: 'CLEAR'}
| {type: 'UPDATE_FIELD', payload: {name: 'email' | 'password', value: string}}
| {type: 'VALIDATE_FIELD', payload: {name: 'email' | 'password'}}