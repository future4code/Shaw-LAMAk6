import DetailsBand from "../Data/DetailsBandData"

const detailsBand = new DetailsBand()

export default class DetailsBusiness {


    DetailsBands = async (nameInput: string) => {
        if (!nameInput) {
            throw new Error("Enter a Name");''   
        }

        const DataBandDetails = await detailsBand.getDetails (nameInput)

        return DataBandDetails
    }


    
}

