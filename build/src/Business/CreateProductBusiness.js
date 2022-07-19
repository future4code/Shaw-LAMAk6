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
const CreateProductData_1 = require("../Data/CreateProductData");
const ProductCreate_1 = require("../Models/ProductCreate");
const idGenerate_1 = require("../Services/idGenerate");
const idGenerator = new idGenerate_1.IdGenerate();
const createProductData = new CreateProductData_1.CreateProductData();
class CreateProductBusiness {
    constructor() {
        this.createBand = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name, type, details, price } = input;
            if (!name || !type || !details || !price) {
                throw new Error('Campos inválidos');
            }
            const id = idGenerator.generateId();
            const productCreate = new ProductCreate_1.ProductCreate(id, name, type, details, price);
            yield createProductData.Create(productCreate);
        });
    }
}
exports.default = CreateProductBusiness;
