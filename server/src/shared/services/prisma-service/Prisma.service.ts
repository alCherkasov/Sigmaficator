import { PrismaClient } from '@prisma/client'
import { ILoggerService } from '../logger/Logger.interface'
import { IPrismaService } from './Prisma.service.interface'

export class PrismaService implements IPrismaService {
	client: PrismaClient
	logger: ILoggerService

	constructor(logger: ILoggerService) {
		this.client = new PrismaClient()
		this.logger = logger
	}

	async connect(): Promise<void> {
		try {
			await this.client.$connect()
			this.logger.log('[PrismaService]: Успешное подключение к базе данных')
		} catch(e) {
			if(e instanceof Error) {
				this.logger.error('[PrismaService]: Ошибка подключения к базе данных: ' + e.message)
			}
		}
	}

	async disconnect(): Promise<void> {
		await this.client.$disconnect()
		this.logger.log('[PrismaService]: Отключение от базы данных')
	}
}