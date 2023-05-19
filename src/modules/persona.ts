import  { LicenciaConduccion as Licencia } from "./licenciaConduccion.js";

export class Persona{
    nombre: string
    cedula: string
    telefono: string
    edad: number
    licencia: Licencia | null;
    /**
     * Algunas personas pueden no contar con licencia de conducir al conducir un auto o desplasarse en bicicleta, lo que no requiere de licencia.
     */


    constructor(nombre:string, cedula:string, telefono:string, edad:number){
        this.nombre = nombre; 
        this.cedula = cedula; 
        this.telefono = telefono; 
        this.edad = edad;
        this.licencia = null;
    }

    agregarLicencia(licencia: Licencia): void{
        this.licencia = licencia;
    }
}