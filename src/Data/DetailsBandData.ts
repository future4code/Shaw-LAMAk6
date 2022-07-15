import { BaseDatabase } from "./BaseDatabase";

export default class DetailsBand extends BaseDatabase {
    getDetails = async (name: string) => {
        const result = await this.connection("Bandas")
        .select("*")
        .where({ name:name })
        return result
    }
        
}
