"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
class App {
    constructor(logger) {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT;
        this.logger = logger;
    }
    useRoutes() {
    }
    init() {
        this.server = this.app.listen(this.port);
        this.logger.log(`Сервер начал работу на http://localhost:${this.port}`);
    }
}
exports.App = App;
