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
exports.CreateBandController = void 0;
class CreateBandController {
    constructor(createBandBusiness) {
        this.createBandBusiness = createBandBusiness;
        this.createBand = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { name, music_genre, responsible } = req.body;
            const input = {
                name,
                music_genre,
                responsible
            };
            try {
                const insertBandFromDB = yield this.createBandBusiness.createBand(input);
                res.status(201).send({ message: 'Banda adicionada com sucesso !', insertBandFromDB });
            }
            catch (error) {
                res.status(500).send(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CreateBandController = CreateBandController;
