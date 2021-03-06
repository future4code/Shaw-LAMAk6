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
exports.UserController = void 0;
const UserBusiness_1 = require("../Business/UserBusiness");
const userBusiness = new UserBusiness_1.UserBusiness();
class UserController {
    constructor() {
        this.signup = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password, role } = req.body;
                const response = yield userBusiness.signup(name, email, password, role);
                res.send({ message: "User createde", response });
            }
            catch (error) {
                res.status(500).send(error.sqlMessage || error.message);
            }
        });
        this.login = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const response = yield userBusiness.Login(email, password);
                res.send({ message: "logged in user", response });
            }
            catch (error) {
                res.status(500).send(error.sqlMessage || error.message);
            }
        });
    }
}
exports.UserController = UserController;
