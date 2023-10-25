/* . Crea un array de números de un tamaño pasado por prompt, el array contendrá
números aleatorios entre 1 y 300 y mostrará aquellos números que acaben en un 
dígito que nosotros le indiquemos por prompt (debes controlar que se introduce un 
número correcto), estos deben guardarse en un nuevo array. Por ejemplo, en un 
JavaScript Vanilla Basics
array de 10 posiciones le indicamos mostrar los números acabados en 5, podría salir 
155, 25, etc. */

let dimension = parseInt(prompt("Introduzca la dimension del array."));
let array1 = [];
let array2 = [];
let ultimoDigito = parseInt(
  prompt("Introduce el último dígito de los números a mostrar.")
);

if (ultimoDigito >= 0 && ultimoDigito < 10) {
  console.log("Dígito introducido correctamente.");
} else {
  console.log("Dígito introducido incorrectamente.");
}

for (let i = 1; i <= dimension; i++) {
  array1.push(1 + parseInt(Math.random() * 299));
}
console.log(array1, "bueno vamos a ver que tenemos dentro del primer array vale?????"); //Para comprobar

for (e = 0; e < dimension; e++) {
  if (array1[e] % 10 == ultimoDigito) {
    array2.push(array1[e]);
  }
}
console.log(array2, "estos son los que quedannnnn");
