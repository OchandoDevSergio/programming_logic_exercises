/* Escribe un programa que muestre por consola (con un print) los
  números de 1 a 100 (ambos incluidos y con un salto de línea entre
  cada impresión), sustituyendo los siguientes:
  - Múltiplos de 3 por la palabra "fizz".
  - Múltiplos de 5 por la palabra "buzz".
  - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz". */

let myArr = [];
for (let i = 1; i<101; i++) {
   if ((i%3==0)&&(i%5!==0)){
    myArr.push("fizz");
   } else if ((i%5==0)&&(i%3!==0)){
    myArr.push("buzz");
   } else if ((i%5==0)&&(i%3==0)){
    myArr.push("fizzbuzz");
   } else {
    myArr.push(i);
   }  
};
console.log(myArr)