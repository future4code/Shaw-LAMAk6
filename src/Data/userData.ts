import { User } from "../Models/User";
import { BaseDatabase } from "./BaseDatabase";


export class UserData extends BaseDatabase {

    signup = async (user:User) => {
        await this.connection("Users_music")
        .insert({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            role: user.role
        })
    }

    selectUserByEmail = async (email:string) => {

        try {

        const response = await this.connection("Users_music")
        .where({email:email})

        return response[0]

        } catch (error:any) {
           throw new Error(error.message);

        }

    }

}