import { BaseDatabase } from "./BaseDatabase";

export default class GetDateShowForDayData extends BaseDatabase {
    getShowForDay = async (week_day: string) => {
        const result = await this.connection('Shows')             
            .innerJoin('Bandas', 'Bandas.id', 'Shows.band_id')
            .where('Shows.week_day', week_day)

        return result
    }

}