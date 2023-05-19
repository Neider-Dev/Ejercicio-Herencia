import { Vehiculo } from "./vehiculo.js";
export class Bicicleta extends Vehiculo {
    constructor(marca, modelo, color, ruedas, propietario, tipo, luces) {
        super(marca, modelo, color, ruedas, propietario);
        this.tipo = tipo;
        this.luces = luces;
    }
}
