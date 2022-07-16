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
exports.DetailsBandController = void 0;
const DetailsBusiness_1 = __importDefault(require("../Business/DetailsBusiness"));
const detailsBusiness = new DetailsBusiness_1.default();
class DetailsBandController {
    constructor() {
        this.getBand = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name } = req.body;
            try {
                const Details = yield detailsBusiness.DetailsBands(name);
                res.status(201).send({ Details });
            }
            catch (error) {
                res.status(400).send(error.sqlMessage || error.message);
            }
        });
    }
}
exports.DetailsBandController = DetailsBandController;
