import { NextFunction, Request, Response } from 'express'
import { ILoggerService } from '../logger/Logger.interface'
import { IExceptionFilter } from './Exception.filter.inteface'
import { HTTPError } from './Http-error.class'

export class ExceptionFilter implements IExceptionFilter {

	logger: ILoggerService

	constructor(logger: ILoggerService) {
		this.logger = logger
	}
	catch(
		error: Error | HTTPError,
		req: Request,
		res: Response,
		next: NextFunction): void {

		if(error instanceof HTTPError) {
			this.logger.error(`Ошибка ${error.status} ${error.message}`)
			res.status(error.status).send({error: error.message})
		} else {
			this.logger.error(`${error.message}`)
			res.status(500).send({error: error.message})
		}
	}
}