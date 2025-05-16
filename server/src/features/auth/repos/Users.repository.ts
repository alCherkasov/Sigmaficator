import { UserModel } from '@prisma/client'
import { IPrismaService } from '../../../shared/services/prisma-service/Prisma.service.interface'
import { IUser } from '../entities/User.entity.interface'
import { IUsersRepository } from './Users.repository.interface'

export class UsersRepository implements IUsersRepository {
	prismaService: IPrismaService

	constructor(prismaServise: IPrismaService) {
		this.prismaService = prismaServise
	}
	async create(user: IUser): Promise<UserModel> {
		const {name, email, password} = user
		return this.prismaService.client.userModel.create({
			data: {
				name,
				email,
				password
			}
		})
	}

	async find(email: string): Promise<UserModel | null> {
		return this.prismaService.client.userModel.findFirst({
			where: {
				email
			}
		})
	}
}