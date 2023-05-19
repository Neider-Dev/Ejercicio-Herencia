import { Vehiculo } from "./vehiculo.js";
import { Persona } from "./persona.js";

type medida = {
    valor: number
    unidad: string
}

/**
 * Debido a la influencia de algunos profesores :) no me agrada dejar medidas sin unidad, por lo que agrego un typo medida para tener claro las unidades siempre :).
 */

class Motorizado extends Vehiculo{
    placa: string
    velocidadMaxima: medida = {
        valor: 0,
        unidad: ""
    }

    constructor(marca:string, modelo:string, color:string, ruedas:number, propietario:Persona, placa:string, velocidadMax:number, unidadesVelocidadMax:string){
        super(marca, modelo, color, ruedas, propietario)
        this.placa = placa;
        this.velocidadMaxima.unidad = unidadesVelocidadMax;
        this.velocidadMaxima.valor = velocidadMax;
    }
}

/**
 * Para evitar crear modulos en cantidad cree las clases Carro y Motocicleta dentro del mismo modulo
 */

export class Carro extends Motorizado{
    asientos: number

    constructor(marca:string, modelo:string, color:string, ruedas:number, propietario:Persona, placa:string, velocidadMax:number, unidadesVelocidadMax:string, asientos: number){
        super(marca, modelo, color, ruedas, propietario, placa, velocidadMax, unidadesVelocidadMax)
        this.asientos = asientos;
    }
}

export class Motocicleta extends Motorizado{
    cilindraje: number

    constructor(marca:string, modelo:string, color:string, ruedas:number, placa:string, propietario:Persona, velocidadMax:number, unidadesVelocidadMax:string, cilindraje: number){
        super(marca, modelo, color, ruedas, propietario, placa, velocidadMax, unidadesVelocidadMax)
        this.cilindraje = cilindraje;
    }
}