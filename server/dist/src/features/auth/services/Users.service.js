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
exports.UsersService = void 0;
const User_entity_1 = require("../entities/User.entity");
class UsersService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    createUser(_a) {
        return __awaiter(this, arguments, void 0, function* ({ name, email, password }) {
            const newUser = new User_entity_1.User(name, email);
            const salt = process.env.SALT;
            yield newUser.setPassword(password, Number(salt));
            const existedUser = yield this.usersRepository.find(email);
            if (existedUser)
                return null;
            return this.usersRepository.create(newUser);
        });
    }
    findUser(_a) {
        return __awaiter(this, arguments, void 0, function* ({ email, password }) {
            const existedUser = yield this.usersRepository.find(email);
            if (!existedUser)
                return false;
            const newUser = new User_entity_1.User(existedUser.name, existedUser.email, existedUser.password);
            return newUser.comparePassword(password);
        });
    }
}
exports.UsersService = UsersService;
