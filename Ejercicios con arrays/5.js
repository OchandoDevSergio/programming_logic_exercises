// 5. Crea un array con al menos 10 números y una función que los divida en otros
// dos arrays: uno para pares y otro para impares. A continuación, saca por consola
// ambos arrays resultantes concatenados.

let arr1 = [2, 3, 6, 4, 1, 8, 7, 9, 2, 1];
let pares = [];
let impares = [];
const Paresimpares = (arr1) => {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] % 2 !== 0) {
      impares.push(arr1[i]);
    } else {
      pares.push(arr1[i]);
    }
  }
};
Paresimpares(arr1);
console.log("Pares", pares);
console.log("Impares", impares);
