import { Persona } from "./persona.js";

export class LicenciaConduccion{
    tipoLicencia: string
    fechaExpedicion: Date
    vigencia: Date
    propietario: Persona 

    constructor(tipo:string, expedicion:Date, vigencia:Date, propietario:Persona){
        this.tipoLicencia = tipo;
        this.fechaExpedicion = expedicion;
        this.vigencia = vigencia;
        this.propietario = propietario;
    }
}