import cors from 'cors'
import 'dotenv/config'
import express, { Express, json } from 'express'
import { Server } from 'http'
import { IAuthController } from '../features/auth/controllers/Auth.interface'
import { AuthMiddleware } from '../features/auth/middlewares/Auth.middleware'
import { IExceptionFilter } from '../shared/services/exceptionFilter/Exception.filter.inteface'
import { ILoggerService } from '../shared/services/logger/Logger.interface'
import { IPrismaService } from '../shared/services/prisma-service/Prisma.service.interface'

export class App {

	app: Express = express()
	port: string | undefined
	server: Server
	logger: ILoggerService
	authController: IAuthController
	prismaService: IPrismaService
	exceptionFilter: IExceptionFilter

	constructor(
		logger: ILoggerService,
		authController: IAuthController, 
		prismaServive: IPrismaService,
		exceptionFilter: IExceptionFilter
	) {
		
		this.port = process.env.PORT
		this.logger = logger
		this.authController = authController
		this.prismaService = prismaServive
		this.exceptionFilter = exceptionFilter
	}

	useRoutes(): void {
		this.app.use('/auth', this.authController.router)
	}

	useExceptionFilters(): void {
		this.app.use(this.exceptionFilter.catch.bind(this.exceptionFilter))
	}

	useMiddleware(): void {
		this.app.use(json())
		const authMiddleware = new AuthMiddleware(process.env.SECRET as string)
		this.app.use(authMiddleware.execute.bind(authMiddleware))
		this.app.use(cors({
			origin: 'http://localhost:5173',
			credentials: true
		}))
	}

	async init(): Promise<void> {
		this.useMiddleware()
		this.useRoutes()
		this.useExceptionFilters()
		await this.prismaService.connect()
		this.server = this.app.listen(this.port)
		this.logger.log(`Сервер начал работу на http://localhost:${this.port}`)
	}
}