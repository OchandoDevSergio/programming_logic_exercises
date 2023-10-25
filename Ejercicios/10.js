/* Crear una función en la que se tome como entrada una hora exacta 
(horas:minutos:segundos y AM o PM) y nos devuelva la suma de segundos
transcurridos en el día */

let cuenta = 0;
let hora = prompt("introduce una hora con el formato horas:minutos:segundos y AM o PM");

const Contador = (hora) => { 
let arrHora = hora.split(":");
let hours = parseInt(arrHora[0]);
let minutes = parseInt(arrHora[1]);
let ending = arrHora[2];
ending = ending.split(" ");

if (ending.length < 2) {
ending = ending[0].split("A");
}

if (ending.length < 2) {
ending = ending[0].split("P");

  if (ending.length == 2) {
    cuenta = cuenta + 43200;

}}

if (ending[1] == "PM") {
    cuenta = cuenta + 43200;
}

let seconds = parseInt(ending[0]);

cuenta = cuenta + (seconds) + (minutes *60) + (hours * 3600);
console.log("soy la cuenta", cuenta);
}

Contador (hora);