export interface IMeisterschaftenliste {
    ID: number,
    Bezeichnung: string,
    Beginn: Date,
    Ende: Date, //| undefined,
    MeisterschaftstypID: number,
    Meisterschaftstyp: string,
    Aktiv: number
}

// export interface Tile {
//     cols: number;
//     rows: number;
//     text: string;
// }
  
// export class Tile {
//     constructor(
//         public cols: number,
//         public rows: number,
//         public text: string
//     ) {}
// }