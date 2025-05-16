export interface IUser {
	name: string
	email: string
	password: string
	setPassword(password: string, salt: string | number): Promise<void>
}