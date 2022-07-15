import BandCreatedData from '../Data/BandData'
import { CreateBand, CreateBandUser } from '../Models/CreateBand'
import { IdGenerate } from '../Services/idGenerate'



export default class CreateBandBusiness {
    constructor(
        private userData: BandCreatedData,
        private idGenerator: IdGenerate        
    ) { }

    createBand = async (input: CreateBand) => {

        const { name, music_genre, responsible } = input

        if (!name || !music_genre || !responsible) {
            throw new Error('Campos inválidos')
        }

        const bandExists = await this.userData.findByBand(name)
        if (bandExists) {
            throw new Error('Banda já cadastrada !')
        }

        const id = this.idGenerator.generateId()

        const bandCreate = new CreateBandUser(
            id,
            name,
            music_genre,
            responsible
        )

        await this.userData.insert(bandCreate)


    }

    

    
}

