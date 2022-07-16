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
exports.AddShowData = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
class AddShowData extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.addShow = (show) => __awaiter(this, void 0, void 0, function* () {
            yield this.connection("Shows")
                .insert({
                id: show.id,
                week_day: show.weekDay,
                start_time: show.startTime,
                end_time: show.endTime,
                band_id: show.bandId
            });
        });
        this.getShowByHour = (startTime) => __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield this.connection("Shows")
                    .where({ start_time: startTime });
                return response[0];
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.AddShowData = AddShowData;
