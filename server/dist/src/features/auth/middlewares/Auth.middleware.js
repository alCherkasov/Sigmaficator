"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class AuthMiddleware {
    constructor(secret) {
        this.secret = secret;
    }
    execute(req, res, next) {
        const authHeader = req.headers.authorization;
        if (!authHeader)
            return next();
        const token = authHeader.split(' ')[1];
        const payload = (0, jsonwebtoken_1.verify)(token, this.secret);
        req.user = payload.email;
        next();
    }
}
exports.AuthMiddleware = AuthMiddleware;
