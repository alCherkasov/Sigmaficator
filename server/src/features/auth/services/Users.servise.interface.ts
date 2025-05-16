import { UserModel } from '@prisma/client'
import { LoginDto } from '../contracts/Login.dto'
import { RegisterDto } from '../contracts/Register.dto'

export interface IUsersService {
	createUser({name, email, password}: RegisterDto): Promise<UserModel | null>

	findUser({email, password}: LoginDto): Promise<boolean>

	getUserInfo(email: string): Promise<UserModel | null>
}