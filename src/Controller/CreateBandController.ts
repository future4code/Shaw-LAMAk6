import { Request, Response } from "express";
import { CreateBand } from "../Models/CreateBand";
import CreateBandBusiness  from '../Business/CreateBandBusiness'

export class CreateBandController {

    constructor(
        private createBandBusiness: CreateBandBusiness
    ) { }
    createBand = async (req: Request, res: Response) => {
        
        const { name, music_genre, responsible } = req.body

        const input: CreateBand = {
            name,
            music_genre,
            responsible

        }       


        try {
            const insertBandFromDB = await this.createBandBusiness.createBand(input)
            res.status(201).send({ message: 'Banda adicionada com sucesso !', insertBandFromDB })
            
            
        } catch (error:any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
}