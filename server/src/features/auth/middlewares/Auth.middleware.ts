import { NextFunction, Request, Response } from 'express'
import { JwtPayload, verify } from 'jsonwebtoken'
import { IMiddleware } from '../../../shared/interfaces/Middleware.interface'

export class AuthMiddleware implements IMiddleware {

	secret: string

	constructor(secret: string) {
		this.secret = secret
	}
	execute(req: Request, res: Response, next: NextFunction) {
		const authHeader = req.headers.authorization
		if(!authHeader) return next()
		
		const token = authHeader.split(' ')[1]
		const payload = verify(token, this.secret) as JwtPayload
		req.user = payload.email
		next()
	}
}