import { Request, Response } from "express";
import GetDateShowBusiness from "../Business/GetShowForDayBusiness";

const GetDateShowForDay = new GetDateShowBusiness()


export class GetShowForDayController {

    GetShowForDay = async (req: Request, res: Response) => {
        
        const { week_day } = req.body


        try {
            const Details = await GetDateShowForDay.GetShowForDayBusiness(week_day)
            res.status(201).send({Shows:{Details}})
            
        } catch (error:any) {
            res.status(400).send(error.sqlMessage || error.message)
        }
    }
}