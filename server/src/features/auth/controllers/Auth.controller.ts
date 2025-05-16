import { NextFunction, Request, Response } from 'express'
import { sign } from 'jsonwebtoken'
import { BaseController } from '../../../shared/classes/Base.controller.class'
import { HTTPError } from '../../../shared/services/exceptionFilter/Http-error.class'
import { ILoggerService } from '../../../shared/services/logger/Logger.interface'
import { LoginDto } from '../contracts/Login.dto'
import { RegisterDto } from '../contracts/Register.dto'
import { AuthGuard } from '../middlewares/Auth.guard'
import { IUsersService } from '../services/Users.servise.interface'
import { IAuthController } from './Auth.interface'

export class AuthController extends BaseController implements IAuthController {

	usersService: IUsersService

	constructor(logger: ILoggerService, usersService: IUsersService) {
		super(logger)
		this.logger = logger
		this.usersService = usersService
		this.bindRoutes([
			{
				path: '/login',
				method: 'post',
				func: this.login,
			},
			{
				path: '/register',
				method: 'post',
				func: this.register,
			},
			{
				path: '/info',
				method: 'get',
				func: this.info,
				middlewares: [new AuthGuard()]
			}
		])
	}

	async login({body}: Request<{}, {}, LoginDto>, res: Response, next: NextFunction): Promise<void> {
		const result = await this.usersService.findUser(body)
		if(!result) {
			return next(new HTTPError(401, 'Неверный логин или пароль'))
		}
		const jwt = await this.signJWT(body.email, process.env.SECRET!)
		res.status(200).send({token: jwt})
	} 

	async register({body}: Request<{}, {}, RegisterDto >, res: Response, next: NextFunction): Promise<void> {
		const result = await this.usersService.createUser(body)
		if(!result) {
			return next(new HTTPError(409, 'Пользователь уже существует'))
		}
		const jwt = await this.signJWT(result.email, process.env.SECRET!)
		res.status(201).send({token: jwt})
	} 

	async info({user}: Request, res: Response, next: NextFunction): Promise<void> {
		const userInfo = await this.usersService.getUserInfo(user)
	 	res.status(200).send({name: userInfo?.name, email: userInfo?.email})
	}

	private async signJWT(email: string, secret: string): Promise<string> {
		return new Promise<string>((resolve, reject) => 		
			sign({
				email,
				iat: Math.floor(Date.now() / 1000)
			},
			secret,
			{
				algorithm: 'HS256'
			},
			(err, token) => {
				if(err) reject(err)
				resolve(token as string)
			}
		))
	}
}