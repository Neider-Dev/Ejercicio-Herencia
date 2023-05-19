import { Vehiculo } from "./vehiculo.js";
import { Persona } from "./persona.js";

export class Bicicleta extends Vehiculo{
    tipo: "urbana" | "deportiva"
    luces: boolean
    /**
     * El tipo bicicleta solo puede tomar los valores por defecto
     */


    constructor(marca:string, modelo:string, color:string, ruedas:number, propietario:Persona , tipo:"urbana"|"deportiva", luces:boolean){
        super(marca, modelo, color, ruedas, propietario)
        this.tipo = tipo;
        this.luces = luces;
    }
}
