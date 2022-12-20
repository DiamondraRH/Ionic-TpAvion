import { Marque } from "./Marque"
export interface Avion {
    id : number,
    immatriculation : string,
    places : number,
    portes : number,
    marque : Marque,
    kilometrage : number,
}