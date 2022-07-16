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
exports.GetShowForDayController = void 0;
const GetShowForDayBusiness_1 = __importDefault(require("../Business/GetShowForDayBusiness"));
const GetDateShowForDay = new GetShowForDayBusiness_1.default();
class GetShowForDayController {
    constructor() {
        this.GetShowForDay = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { week_day } = req.body;
            try {
                const Details = yield GetDateShowForDay.GetShowForDayBusiness(week_day);
                res.status(201).send({ Shows: { Details } });
            }
            catch (error) {
                res.status(400).send(error.sqlMessage || error.message);
            }
        });
    }
}
exports.GetShowForDayController = GetShowForDayController;
