import { Request, Response } from "express";
import DetailsBusiness from '../Business/DetailsBusiness'

const detailsBusiness = new DetailsBusiness()


export class DetailsBandController {

    getBand = async (req: Request, res: Response) => {
        
        const { name } = req.body


        try {
            const Details = await detailsBusiness.DetailsBands(name)
            res.status(201).send({Details})
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}