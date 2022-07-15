import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";

const userBusiness = new UserBusiness()

export class UserController {
 signup = async (req: Request, res: Response) => {
        try {

            const {name, email, password, role} = req.body

            const response = await userBusiness.signup(name, email,password, role)

            res.send(response)
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
    
    
     login = async (req: Request, res: Response) => {
        try {

            const {email, password} = req.body

            const response = await userBusiness.login(email, password)

            res.send(`User createde,${response}`)
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }

   
}

