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
exports.AddShowController = void 0;
const AddShowBusiness_1 = require("../Business/AddShowBusiness");
const addShowBusiness = new AddShowBusiness_1.AddShowBusiness();
class AddShowController {
    constructor() {
        this.addShow = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { bandId, weekDay, startTime, endTime } = req.body;
                const response = yield addShowBusiness.addShow(bandId, weekDay, startTime, endTime);
                res.send("created show");
            }
            catch (error) {
                res.status(500).send(error.sqlMessage || error.message);
            }
        });
    }
}
exports.AddShowController = AddShowController;
