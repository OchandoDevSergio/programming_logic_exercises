/* Crea una aplicación que nos calcule el factorial de un número pedido por prompt, lo
realizara mediante un método al que le pasamos el número como parámetro. Para 
calcular el factorial, se multiplica los números anteriores hasta llegar a uno. Por 
ejemplo, si introducimos un 5, realizara esta operación 5*4*3*2*1=120. */

let numeroFactorial = parseInt(prompt("Por favor indique el número."));
let resultado = 1;

function Factorial(numeroFactorial) {
  for (let i = numeroFactorial; i > 0; i--) {
    resultado *= i;
  }

  return console.log(resultado);
}

Factorial(numeroFactorial);
