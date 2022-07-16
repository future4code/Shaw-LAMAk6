import { Show } from "../Models/Show"
import { BaseDatabase } from "./BaseDatabase"


export class AddShowData extends BaseDatabase {

    addShow = async (show:Show) => {
        await this.connection("Shows")
        .insert({
            id:show.id,
            week_day: show.weekDay,
            start_time: show.startTime,
            end_time:show.endTime,
            band_id:show.bandId 
        })
    }

    getShowByHour = async (startTime:number) => {
        try {

          const response =  await this.connection("Shows")
          .where({start_time: startTime})

          return response[0]

            
        } catch (error:any) {
            throw new Error(error.message);
        }
      

        
    }

}