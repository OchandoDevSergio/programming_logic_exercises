/* Crea dos arrays de números con la dimensión pasada por teclado. Uno de ellos 
estará rellenado con números aleatorios y el otro apuntará al array anterior, reasigna 
los valores del segundo array con valores aleatorios. Después, crea un método que 
tenga como parámetros, los dos arrays y devuelva uno nuevo con la multiplicación 
de la posición 0 del array1 con el del array2 y así sucesivamente. Por último, muestra 
el contenido de cada array. */

let array1 = [];
let array2 = [];
let array3 = [];
let dimension = parseInt(prompt("Introduzca la dimensión de los array."));
for (let i = 1; i <= dimension; i++) {
  array1.push(Math.floor(Math.random() * 10)); //Se trataría sólo de números aleatorios con un valor máximo 10...
}
console.log(array1); //para comprobar
//array2.push(array1); //Si lo hago así mete todo el array1 como un valor sólo.
for (let e = 0; e < dimension; e++) {
  array2.push(array1[e]);
}
console.log(array2, "soc Sergio"); //comprobación

//AHORA REASIGNO
for (let a = 0; a < dimension; a++) {
  array2[a] = Math.floor(Math.random() * 10);
}
console.log(array2, "REASIGNADO TOTAL"); //comprobación


function Multiplicador(array1, array2) {
  for (let u = 0; u < dimension; u++) {
    array3[u] = array1[u] * array2[u];
  }
  console.log(array3, "Multiplicadossssssssssss");
}

Multiplicador(array1, array2);
