import { Request, Response } from "express";
import { UserBusiness } from "../Business/UserBusiness";

const userBusiness = new UserBusiness()

export class UserController {


    login = async (req: Request, res: Response) => {
        try {
            const {email, password} = req.body

            const token = await userBusiness.Login(email, password)

            res.send(`Logado Com Sucesso. ${token}`)
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }

}