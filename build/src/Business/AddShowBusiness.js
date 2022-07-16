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
exports.AddShowBusiness = void 0;
const AddShowData_1 = require("../Data/AddShowData");
const idGenerate_1 = require("../Services/idGenerate");
const showData = new AddShowData_1.AddShowData();
const idGenerate = new idGenerate_1.IdGenerate();
class AddShowBusiness {
    constructor() {
        this.addShow = (bandId, weekDay, startTime, endTime) => __awaiter(this, void 0, void 0, function* () {
            if (!weekDay) {
                throw new Error("Enter a day");
            }
            if (!startTime) {
                throw new Error("Enter a hour");
            }
            if (!endTime) {
                throw new Error("Enter a hour");
            }
            if (startTime < 8 || endTime > 23 || startTime >= endTime) {
                throw new Error("Enter the hour between 8h and 23h");
            }
            if (!Number.isInteger(startTime) || !Number.isInteger(endTime)) {
                throw new Error("the hour cannot be a decimal number");
            }
            const show = yield showData.getShowByHour(startTime);
            if (show) {
                throw new Error("The hour already exist");
            }
            const id = idGenerate.generateId();
            yield showData.addShow({
                id: id,
                weekDay: weekDay,
                startTime: startTime,
                endTime: endTime,
                bandId: bandId
            });
        });
    }
}
exports.AddShowBusiness = AddShowBusiness;
