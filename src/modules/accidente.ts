import { Carro, Motocicleta } from "./motirizado.js";
import { Bicicleta } from "./bicicleta.js";
import { Persona } from "./persona.js";

export  class Accidente{
    fecha: Date
    descripcion: string
    severidad: number
    involucrados: (Carro | Motocicleta | Bicicleta | Persona)[]
    /**
     * Los involucrados pueden ser de multiplas tipos, por lo que se utiliza un array que pueda contener todos los tipos, incluida persona.
     */

    constructor(fecha:Date, description:string, severidad:number, involucrados:(Carro | Motocicleta | Bicicleta | Persona)[]){
        this.fecha = fecha;
        this.descripcion = description;
        this.severidad = severidad;
        this.involucrados = involucrados;
        this.agregarReporteInvolucrados();
    }

    /**
     * Para que el registro del accidente tambien se guarde junto a la informacion del implicado, mientras no sea una persona, se utiliza la siguiente funcion.
     */
    agregarReporteInvolucrados(): void{
        this.involucrados.forEach(involucrado => {
            if(!(involucrado instanceof Persona)){
                involucrado.agregarAccidente(this);
            }
        })
    }
}