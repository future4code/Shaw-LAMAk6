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
exports.UserBusiness = void 0;
const UserData_1 = require("../Data/UserData");
const User_1 = require("../Models/User");
const Authenticator_1 = require("../Services/Authenticator");
const HashManager_1 = require("../Services/HashManager");
const idGenerate_1 = require("../Services/idGenerate");
const idGenerate = new idGenerate_1.IdGenerate();
const userData = new UserData_1.UserData();
const authenticator = new Authenticator_1.Authenticator();
const hashManager = new HashManager_1.HashManager();
class UserBusiness {
    constructor() {
        this.signup = (name, email, password, role) => __awaiter(this, void 0, void 0, function* () {
            if (!name) {
                throw new Error("Enter a name");
            }
            if (!email) {
                throw new Error("Enter a email");
            }
            else if (email.indexOf("@") === -1) {
                throw new Error("The email must contain an @");
            }
            if (!password) {
                throw new Error("Enter a password");
            }
            else if (password.length < 6) {
                throw new Error("The password must be longer than 6 characteres");
            }
            if (!role) {
                throw new Error("Enter a role");
            }
            if (role != User_1.Role.ADMIN && User_1.Role.NORMAL) {
                throw new Error("The role must be Admin or Normal");
            }
            const id = idGenerate.generateId();
            const hashPassword = yield hashManager.hash(password);
            yield userData.signup({
                id: id,
                name: name,
                email: email,
                password: hashPassword,
                role: role
            });
            const user = yield userData.selectUserByEmail(email);
            const token = authenticator.generateToken({ id: user.id });
            return token;
        });
        this.Login = (email, password) => __awaiter(this, void 0, void 0, function* () {
            if (!email) {
                throw new Error("Enter a Email");
            }
            if (!password) {
                throw new Error("Enter a Password");
            }
            const user = yield userData.selectUserByEmail(email);
            const token = authenticator.generateToken({ id: user.id });
            return token;
        });
    }
}
exports.UserBusiness = UserBusiness;
