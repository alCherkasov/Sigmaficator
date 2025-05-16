import { compare, hash } from 'bcryptjs'
import { IUser } from './User.entity.interface'

export class User implements IUser {

	private _password: string

	constructor(
		private readonly _name: string,
		private readonly _email: string,
		passwordHash?: string
	) {
		if(passwordHash) this._password = passwordHash
	}

	get name() {
		return this._name
	}

	get email() {
		return this._email
	}

	get password() {
		return this._password
	}

	async setPassword(password: string, salt: number): Promise<void> {
		this._password = await hash(password, salt)
	} 

	async comparePassword(password: string): Promise<boolean> {
		return await compare(password, this._password)
	}
}