export class Persona {
    constructor(nombre, cedula, telefono, edad) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.telefono = telefono;
        this.edad = edad;
        this.licencia = null;
    }
    agregarLicencia(licencia) {
        this.licencia = licencia;
    }
}
