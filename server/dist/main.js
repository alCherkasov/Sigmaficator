"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./src/app/app");
const Auth_controller_1 = require("./src/features/auth/controllers/Auth.controller");
const Users_repository_1 = require("./src/features/auth/repos/Users.repository");
const Users_service_1 = require("./src/features/auth/services/Users.service");
const Exception_filter_1 = require("./src/shared/services/exceptionFilter/Exception.filter");
const Logger_service_1 = require("./src/shared/services/logger/Logger.service");
const Prisma_service_1 = require("./src/shared/services/prisma-service/Prisma.service");
const logger = new Logger_service_1.LoggerService();
const app = new app_1.App(logger, new Auth_controller_1.AuthController(logger, new Users_service_1.UsersService(new Users_repository_1.UsersRepository(new Prisma_service_1.PrismaService(logger)))), new Prisma_service_1.PrismaService(logger), new Exception_filter_1.ExceptionFilter(logger));
function run() {
    app.init();
}
run();
