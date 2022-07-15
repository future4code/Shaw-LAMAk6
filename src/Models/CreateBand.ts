export type CreateBand = {
  name: string,
  music_genre: string,
  responsible: string
}

export  class CreateBandUser{
  constructor(
      private id: string,
      private name: string,
      private music_genre: string,
      private responsible: string
  ){}
}