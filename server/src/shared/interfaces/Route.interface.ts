import { NextFunction, Request, Response, Router } from 'express'
import { IMiddleware } from './Middleware.interface'

export interface IControllerRoute {
	path: string
	method: keyof Pick<Router, 'get' | 'post' | 'patch' | 'put' | 'delete'>
	func(req: Request, res: Response, next: NextFunction): void
	middlewares?: IMiddleware[]
}