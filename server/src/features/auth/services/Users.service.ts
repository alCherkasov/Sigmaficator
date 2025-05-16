import { UserModel } from '@prisma/client'
import { LoginDto } from '../contracts/Login.dto'
import { RegisterDto } from '../contracts/Register.dto'
import { User } from '../entities/User.entity'
import { IUser } from '../entities/User.entity.interface'
import { IUsersRepository } from '../repos/Users.repository.interface'
import { IUsersService } from './Users.servise.interface'

export class UsersService implements IUsersService {
	usersRepository: IUsersRepository
	constructor(usersRepository: IUsersRepository) {
		this.usersRepository = usersRepository
	}

	async createUser({name, email, password}: RegisterDto): Promise<UserModel | null> {
		const newUser: IUser = new User(name, email)
		const salt = process.env.SALT
		await newUser.setPassword(password, Number(salt))
		const existedUser = await this.usersRepository.find(email)

		if(existedUser) return null
		return this.usersRepository.create(newUser)
	}

	async findUser({email, password}: LoginDto): Promise<boolean> {
		const existedUser = await this.usersRepository.find(email)
		if(!existedUser) return false

		const newUser = new User(
			existedUser.name,
			existedUser.email,
			existedUser.password
			)
		return newUser.comparePassword(password)
	}

	async getUserInfo(email: string): Promise<UserModel | null> {
		return this.usersRepository.find(email)
	}
		
}