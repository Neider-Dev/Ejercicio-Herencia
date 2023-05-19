import { Vehiculo } from "./vehiculo.js";
class Motorizado extends Vehiculo {
    constructor(marca, modelo, color, ruedas, propietario, placa, velocidadMax, unidadesVelocidadMax) {
        super(marca, modelo, color, ruedas, propietario);
        this.velocidadMaxima = {
            valor: 0,
            unidad: ""
        };
        this.placa = placa;
        this.velocidadMaxima.unidad = unidadesVelocidadMax;
        this.velocidadMaxima.valor = velocidadMax;
    }
}
export class Carro extends Motorizado {
    constructor(marca, modelo, color, ruedas, propietario, placa, velocidadMax, unidadesVelocidadMax, asientos) {
        super(marca, modelo, color, ruedas, propietario, placa, velocidadMax, unidadesVelocidadMax);
        this.asientos = asientos;
    }
}
export class Motocicleta extends Motorizado {
    constructor(marca, modelo, color, ruedas, placa, propietario, velocidadMax, unidadesVelocidadMax, cilindraje) {
        super(marca, modelo, color, ruedas, propietario, placa, velocidadMax, unidadesVelocidadMax);
        this.cilindraje = cilindraje;
    }
}
