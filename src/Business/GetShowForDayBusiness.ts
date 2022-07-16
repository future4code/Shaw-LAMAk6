import GetDateShowForDayData from "../Data/GetShowsForDayData";


const GetShowForDay = new GetDateShowForDayData()

export default class GetDateShowBusiness {


    GetShowForDayBusiness = async (week_day: string) => {
        if (!week_day) {
            throw new Error("Entre com o dia do show");''   
        }

        const DataBandDetails = await GetShowForDay.getShowForDay(week_day)

        return DataBandDetails
    }


    
}

