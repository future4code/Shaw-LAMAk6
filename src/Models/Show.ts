export enum Day {
    SEXTA = "sexta",
    SABADO = "sabado",
    DOMINGO = "domingo"
}

export type Show = {
    id:string,
    weekDay: string,
    startTime: number, 
    endTime: number,
    bandId: string
}