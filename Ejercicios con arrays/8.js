/* Crea un array de números donde le indicamos por prompt el tamaño del array,
rellenaremos el array con números aleatorios entre 0 y 9. Al final muestra por consola
el valor de cada posición y la suma de todos los valores. Tareas a realizar: Haz un 
método para rellenar el array(que tenga como parámetros los números entre los que 
tenga que generar) y otro para mostrar el contenido y la suma del array. */

let array1 = [];
let cantidadNumeros = parseInt(
  prompt("Introduzca la cantidad de números que desea en el array:")
);

for (i = 0; i < cantidadNumeros; i++) {
  array1.push(1 * Math.floor(Math.random() * 9));
}

function showData(array1) {
  for (let e = 0; e < array1.length; e++) {
    console.log(array1[e]);
  }
}
function sumData(array1) {
  let sumaData = 0;
  for (let e = 0; e < array1.length; e++) {
    sumaData += array1[e];
  }
  console.log(sumaData);
}
showData(array1);
sumData(array1);
