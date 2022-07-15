import { BaseDataBase } from "./BaseDatabase";

export default class BandCreatedData extends BaseDataBase {
    protected TABLE_NAME = 'Bandas'

    insert = async (band: any) => {
        try {
            const response = await this.connection(this.TABLE_NAME)
                .insert(band)
            return response
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message)
            } else {
                throw new Error('Erro')
            }

        }
    }

    findByBand = async (name: string) => {
        try {
            const queryResult = await this.connection(this.TABLE_NAME)
                .select()
                .where({ name })
            return queryResult[0]
        } catch (error) {
            throw new Error()

        }
    }



    //     findByPassword = async (password: string) => {
    //         try {
    //             const queryResult = await BaseDataBase
    //                 .connection(this.TABLE_NAME)
    //                 .select()
    //                 .where({ password })
    //             return queryResult[0]
    //         } catch (error) {
    //             throw new Error()

    //         }
    //     }

}