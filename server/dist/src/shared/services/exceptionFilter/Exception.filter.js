"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExceptionFilter = void 0;
const Http_error_class_1 = require("./Http-error.class");
class ExceptionFilter {
    constructor(logger) {
        this.logger = logger;
    }
    catch(error, req, res, next) {
        if (error instanceof Http_error_class_1.HTTPError) {
            this.logger.error(`Ошибка ${error.status} ${error.message}`);
            res.status(error.status).send({ err: error.message });
        }
        this.logger.error(`${error.message}`);
        res.status(500).send({ error: error.message });
    }
}
exports.ExceptionFilter = ExceptionFilter;
