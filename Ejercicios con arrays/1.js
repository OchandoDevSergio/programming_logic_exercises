// 1. Dado el array ["A", "B", "C", "D", "E", "F", "G", "H", "I"]
// crea una función que saque por consola la longitud del array. 
//Crea otra función que obtenga un elemento
// aleatorio del array y lo saque por consola.

let arr1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];
let longitudArray = 0;

const Longitud = (arr1) => {
  for (let i = 0; i < arr1.length; i++) {
    longitudArray++;
  }
  console.log("La longitud del array es:", longitudArray);
};
Longitud(arr1);

const Aleatorio = (arr1) => {
  let numeroAleatorio = parseInt(Math.random() * longitudArray);
  console.log(arr1[numeroAleatorio], "es un elemento del array seleccionado aleatoriamente");
};
Aleatorio(arr1);
