import { UserModel } from '@prisma/client'
import { IUser } from '../entities/User.entity.interface'

export interface IUsersRepository {
	create(user: IUser): Promise<UserModel>
	find(email: string): Promise<UserModel | null>
}