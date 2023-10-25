// 6. Utilizando el array del ejercicio anterior, crea una función que saque por consola
// únicamente los números mayores que 5.

let arr1 = [2, 3, 6, 4, 1, 8, 7, 9, 2, 1];
const Mayores5 = (arr1) => {
  for (i = 0; i < arr1.length; i++) {
    if (arr1[i] > 5) {
      console.log(arr1[i]);
    }
  }
};
Mayores5(arr1);
