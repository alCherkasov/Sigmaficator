import { App } from './src/app/app'
import { AuthController } from './src/features/auth/controllers/Auth.controller'
import { UsersRepository } from './src/features/auth/repos/Users.repository'
import { UsersService } from './src/features/auth/services/Users.service'
import { ExceptionFilter } from './src/shared/services/exceptionFilter/Exception.filter'
import { LoggerService } from './src/shared/services/logger/Logger.service'
import { PrismaService } from './src/shared/services/prisma-service/Prisma.service'

const logger = new LoggerService()
const app = new App(
	logger,
	new AuthController(
		logger,
		new UsersService(
			new UsersRepository(
				new PrismaService(logger)
			)
		),
	),
	new PrismaService(
		logger
	),
	new ExceptionFilter(logger)
)

function run() {
	app.init()
}

run()