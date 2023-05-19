import { Persona } from "./persona.js";
export class Accidente {
    constructor(fecha, description, severidad, involucrados) {
        this.fecha = fecha;
        this.descripcion = description;
        this.severidad = severidad;
        this.involucrados = involucrados;
        this.agregarReporteInvolucrados();
    }
    agregarReporteInvolucrados() {
        this.involucrados.forEach(involucrado => {
            if (!(involucrado instanceof Persona)) {
                involucrado.agregarAccidente(this);
            }
        });
    }
}
