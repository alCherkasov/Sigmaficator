"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
const express_1 = require("express");
class BaseController {
    get router() {
        return this._router;
    }
    constructor(logger) {
        this._router = (0, express_1.Router)();
        this.logger = logger;
    }
    bindRoutes(routes) {
        for (const route of routes) {
            const { path, method, func, middlewares } = route;
            this.logger.log(`[${method}]: ${path}`);
            const handler = func.bind(this);
            const middleware = middlewares === null || middlewares === void 0 ? void 0 : middlewares.map(item => item.execute.bind(item));
            const pipeline = middleware ? [...middleware, handler] : handler;
            this.router[method](path, pipeline);
        }
    }
}
exports.BaseController = BaseController;
