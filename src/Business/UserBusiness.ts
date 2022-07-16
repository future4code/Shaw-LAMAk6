import { UserData } from "../Data/userData";
import { Role } from "../Models/User";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerate } from "../Services/idGenerate";


const idGenerate = new IdGenerate()
const userData = new UserData()
const authenticator = new Authenticator()
const hashManager = new HashManager()


export class UserBusiness {
    signup = async (name: string, email:string, password: string, role: Role) => {

        if(!name){
            throw new Error("Enter a name"); 
        }

        if(!email){
            throw new Error("Enter a email");  

        }else if(email.indexOf("@") === -1){
            throw new Error("The email must contain an @");
        }

        if(!password){
            throw new Error("Enter a password"); 

        }else if(password.length < 6){
            throw new Error("The password must be longer than 6 characteres");   
        }

        if(!role){
            throw new Error("Enter a role");    
        }

        if(role != Role.ADMIN && Role.NORMAL){
            throw new Error("The role must be Admin or Normal");    
        }

        const id = idGenerate.generateId()
        const hashPassword = await hashManager.hash(password) 

        await userData.signup({
            id:id,
            name: name,
            email:email,
            password:hashPassword,
            role: role
        })

        const user = await userData.selectUserByEmail(email)

        const token = authenticator.generateToken({id:user.id})

        return token


    }
    
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


   

