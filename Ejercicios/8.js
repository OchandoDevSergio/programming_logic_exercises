/* Crea una aplicación que nos cuente el número de cifras de un número entero positivo
(hay que controlarlo) pedido por prompt. Crea un método que realice esta acción, 
pasando el número por parámetro devolverá el número de cifras. */

let numeroIntroducido = prompt("Introduzca un número entero positivo.");
let numeroCifras = 0;
function CuentaCifras(numeroIntroducido) {
  if (numeroIntroducido >= 0) {
    return numeroCifras = numeroIntroducido.length;
  } else {
    return console.log("Error, introduzca un número entero positivo.");
  }
}

let resultado = CuentaCifras(numeroIntroducido);

console.log(resultado);