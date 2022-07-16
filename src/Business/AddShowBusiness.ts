import { AddShowData } from "../Data/AddShowData";
import { Day } from "../Models/show";
import { IdGenerate } from "../Services/idGenerate";

const showData = new AddShowData()
const idGenerate = new IdGenerate()

export class AddShowBusiness {

   addShow = async (bandId:string, weekDay:Day, startTime:number, endTime:number) => {

    if(!weekDay){
        throw new Error("Enter a day");    
    }

    if(!startTime){
        throw new Error("Enter a hour");    
    }
    
    if(!endTime){
        throw new Error("Enter a hour");    
    }

    if(startTime < 8 || endTime > 23 || startTime >= endTime){
        throw new Error("Enter the hour between 8h and 23h")
    }

    if(!Number.isInteger(startTime) || !Number.isInteger(endTime)){
        throw new Error("the hour cannot be a decimal number")
    }

     
   const show = await showData.getShowByHour(startTime)


   if(show){
    throw new Error("The hour already exist");
   }


   const id = idGenerate.generateId()

   await showData.addShow({
    id:id,
    weekDay: weekDay,
    startTime: startTime,
    endTime: endTime,
    bandId: bandId

   })    


   }
}

