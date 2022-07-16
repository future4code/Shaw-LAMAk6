import { Request, Response } from "express";
import { AddShowBusiness } from "../Business/AddShowBusiness";

const addShowBusiness = new AddShowBusiness()

export class AddShowController {
    addShow = async (req: Request, res: Response) => {
        try {
            
          const {bandId,weekDay ,startTime, endTime} = req.body

          const response = await addShowBusiness.addShow(bandId,weekDay, startTime, endTime)

          res.send("created show")
            

        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}