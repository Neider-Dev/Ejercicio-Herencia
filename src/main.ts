import { Carro, Motocicleta } from "./modules/motirizado.js";
import { Bicicleta } from "./modules/bicicleta.js";
import { Persona } from "./modules/persona.js";
import { Accidente } from "./modules/accidente.js";
import { LicenciaConduccion as Licencia } from "./modules/licenciaConduccion.js";

/**
 * El siguiente es un ejemplo de la utilizacion de las clases y sus relaciones.
 */

const carlos = new Persona("Carlos", "1234", "+57 1", 25);
const maria = new Persona("Maria", "4567", "+57 2", 15);
const andres = new Persona("Andres", "7890", "+57 3", 34);
const camila = new Persona("Camila", "7107", "+57 4", 28);

let  fechaExpedicion:Date = new Date();
fechaExpedicion.setFullYear(2000, 6, 4);
let  vigencia:Date = new Date();
vigencia.setFullYear(2100, 5, 4);

const licenciaCarlos = new Licencia("A",fechaExpedicion, vigencia, carlos);
carlos.agregarLicencia(licenciaCarlos);

const carroCarlos = new Carro("Audi", "2015", "Amarillo", 4, carlos, "ABC123", 125, "KM/H", 4);

const motoMaria = new Motocicleta("BMW", "R 1250 GS Adventure", "Cafe - Negro", 2 , "CDE45E", maria, 200, "KM/H", 1000);

const bicicletaAndres = new Bicicleta("Rinho", "MTB", "Rojo", 2, andres, "urbana", false);

const fechaAccidente = new Date();
fechaAccidente.setTime(1672572720000);//La fecha se define en formato UNIX con el suceso ocurriendo el 1 de enero del 2023 a las 11:32

const accidente1 = new Accidente(fechaAccidente, "Choque multiple", 2, [carroCarlos, motoMaria, bicicletaAndres, camila]);

console.log(accidente1)

