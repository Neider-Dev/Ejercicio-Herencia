export class Vehiculo {
    constructor(marca, modelo, color, ruedas, propietario) {
        this.accidentes = [];
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
        this.propietario = propietario;
    }
    agregarAccidente(accidente) {
        this.accidentes.push(accidente);
    }
}
