import { Request, Response } from "express";

export class UserController {
    signup = async (req: Request, res: Response) => {
        try {

            const {}
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}