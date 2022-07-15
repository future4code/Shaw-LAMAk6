import { User } from "../Models/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserData extends BaseDatabase {

    selectUserByEmail = async (email: string) => {
        try {

            const response = await this.connection("Users_music")
                .where({ email: email })

            return response[0]

        } catch (error: any) {
            throw new Error(error.message);

        }

    }
}