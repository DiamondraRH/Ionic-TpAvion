import { Avion } from "./Avion";

export interface Assurance{
    id : number,
    dateObtention : Date,
    dateExpiration : Date,
    avion : Avion
}