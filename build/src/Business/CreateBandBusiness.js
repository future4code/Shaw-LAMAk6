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
const CreateBand_1 = require("../Models/CreateBand");
class CreateBandBusiness {
    constructor(userData, idGenerator) {
        this.userData = userData;
        this.idGenerator = idGenerator;
        this.createBand = (input) => __awaiter(this, void 0, void 0, function* () {
            const { name, music_genre, responsible } = input;
            if (!name || !music_genre || !responsible) {
                throw new Error('Campos inválidos');
            }
            const bandExists = yield this.userData.findByBand(name);
            if (bandExists) {
                throw new Error('Banda já cadastrada !');
            }
            const id = this.idGenerator.generateId();
            const bandCreate = new CreateBand_1.CreateBandUser(id, name, music_genre, responsible);
            yield this.userData.insert(bandCreate);
        });
    }
}
exports.default = CreateBandBusiness;
