import { UserData } from "../Data/UserData";
import { LoginInput } from "../Models/login";
import { Authenticator } from "../Services/Authenticator";


const authenticator = new Authenticator()
const userData = new UserData()

export class UserBusiness {

    Login = async (email: string, password: string  ) => {

        if (!email) {
            throw new Error("Enter a Email");
        }
        if (!password) {
            throw new Error("Enter a Password");
        }

        const user = await userData.selectUserByEmail(email)

        const token = authenticator.generateToken({id: user.id})


        return token
    }
}