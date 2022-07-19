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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProduct = void 0;
const CreateProductBusiness_1 = __importDefault(require("../Business/CreateProductBusiness"));
const createProductBusiness = new CreateProductBusiness_1.default();
class CreateProduct {
    constructor() {
        this.createProduct = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, type, details, price } = req.body;
            const input = { name, type, details, price };
            try {
                const { name, type, details, price } = req.body;
                const insertProductFromDB = yield createProductBusiness.createBand(input);
                res.status(201).send({ message: 'Produto adicionado com sucesso !', insertProductFromDB });
            }
            catch (error) {
                res.status(400).send(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CreateProduct = CreateProduct;
