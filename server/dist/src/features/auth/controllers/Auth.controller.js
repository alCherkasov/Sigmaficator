"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const Base_controller_class_1 = require("../../../shared/classes/Base.controller.class");
const Http_error_class_1 = require("../../../shared/services/exceptionFilter/Http-error.class");
const Auth_middleware_1 = require("../middlewares/Auth.middleware");
class AuthController extends Base_controller_class_1.BaseController {
    constructor(logger, usersService) {
        super(logger);
        this.logger = logger;
        this.usersService = usersService;
        this.bindRoutes([
            {
                path: '/login',
                method: 'post',
                func: this.login,
                middlewares: [new Auth_middleware_1.AuthMiddleware(process.env.SECRET)]
            },
            {
                path: '/register',
                method: 'post',
                func: this.register,
                middlewares: [new Auth_middleware_1.AuthMiddleware(process.env.SECRET)]
            },
            {
                path: '/info',
                method: 'get',
                func: this.info
            }
        ]);
    }
    login(_a, res_1, next_1) {
        return __awaiter(this, arguments, void 0, function* ({ body }, res, next) {
            const result = yield this.usersService.findUser(body);
            if (!result) {
                return next(new Http_error_class_1.HTTPError(401, 'Неверный логин или пароль'));
            }
            const jwt = yield this.signJWT(body.email, process.env.SECRET);
            res.status(200).send({
                token: jwt
            });
        });
    }
    register(_a, res_1, next_1) {
        return __awaiter(this, arguments, void 0, function* ({ body }, res, next) {
            const result = yield this.usersService.createUser(body);
            if (!result) {
                return next(new Http_error_class_1.HTTPError(409, 'Пользователь уже существует'));
            }
            const jwt = yield this.signJWT(result.email, process.env.SECRET);
            res.status(201).json({
                token: jwt,
                user: {
                    name: result.name,
                    email: result.email
                }
            });
        });
    }
    info(_a, res_1, nex_1) {
        return __awaiter(this, arguments, void 0, function* ({ user }, res, nex) {
            res.status(200).send({ email: user });
        });
    }
    signJWT(email, secret) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => (0, jsonwebtoken_1.sign)({
                email,
                iat: Math.floor(Date.now() / 1000)
            }, secret, {
                algorithm: 'HS256'
            }, (err, token) => {
                if (err)
                    reject(err);
                resolve(token);
            }));
        });
    }
}
exports.AuthController = AuthController;
