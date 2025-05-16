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
            const { path, method, func } = route;
            this.logger.log(`[${method}]: ${path}`);
            this.router[method](path, func.bind(this));
        }
    }
}
exports.BaseController = BaseController;
