import { Accidente } from "./accidente.js";
import { Persona } from "./persona.js";

export abstract class Vehiculo{
    marca: string
    modelo: string
    color: string
    ruedas: number
    accidentes: Accidente[] = [] 
    propietario: Persona
    /**
     * La clase vehiculo es una clase abstracta debido a que no se usará directamente en la implementacion de la aplicacion
     */

    constructor(marca:string, modelo:string, color:string, ruedas:number, propietario:Persona) {
        this.marca = marca; 
        this.modelo = modelo; 
        this.color = color;
        this.ruedas = ruedas; 
        this.propietario = propietario;
    }

    agregarAccidente(accidente: Accidente): void{
        this.accidentes.push(accidente);
    }
}