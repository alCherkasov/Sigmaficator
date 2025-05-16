import { NextFunction, Request, Response, Router } from 'express'

export interface IAuthController {
	router: Router

	login(req: Request, res: Response, next: NextFunction): Promise<void>

	register(req: Request, res: Response, next: NextFunction): Promise<void>

	info(req: Request, res: Response, next: NextFunction): Promise<void>

	// private signJWT(email: string, secret: string): Promise<string>
}