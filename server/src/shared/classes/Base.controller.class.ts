import { Router } from 'express'
import { IControllerRoute } from '../interfaces/Route.interface'
import { ILoggerService } from '../services/logger/Logger.interface'


export class BaseController {

	logger: ILoggerService
	private readonly _router: Router

	get router(): Router {
		return this._router
	}

	constructor(logger: ILoggerService) {
		this._router = Router()
		this.logger = logger
	}

	bindRoutes(routes: IControllerRoute[]): void {
		for(const route of routes) {
			const {path, method, func, middlewares} = route
			this.logger.log(`[${method}]: ${path}`)
			const handler = func.bind(this)
			const middleware = middlewares?.map(item => item.execute.bind(item))
			const pipeline = middleware ? [...middleware, handler] : handler
			this.router[method](path, pipeline)
		}
	}
}