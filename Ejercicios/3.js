/* Crea una aplicación llamada CalculadoraInversa, nos pedirá 2 operandos (int) y 
un signo Aritmetico (String), según este último se realizará la operación 
correspondiente. Al final mostrara el resultado en un cuadro de dialogo.
Los signos Aritmeticos disponibles son:
+: suma los dos operandos.
-: resta los operandos.
*: multiplica los operandos.
/: divide los operandos, este debe dar un resultado con decimales (double)
^: 1º operando como base y 2º como exponente.
%: módulo, resto de la división entre operando1 y operando2 */

let signoAritmetico = prompt(
  "Introduzca signo Aritmetico válido: +, -, *, /, ^, %"
);

let operando1 = parseInt(prompt("Introduzca el primer operando."));

let operando2 = parseInt(prompt("Introduzca el segundo operando."));

let resultado = 0;

switch (signoAritmetico) {
  case "+":
    resultado = operando1 + operando2;
    console.log(resultado);
    break;
  case "-":
    resultado = operando1 - operando2;
    console.log(resultado);
    break;
  case "*":
    resultado = operando1 * operando2;
    console.log(resultado);
    break;
  case "/":
    resultado = operando1 / operando2;
    console.log(resultado);
    break;
  case "^":
    resultado = operando1 ^ operando2;
    console.log(resultado);
    break;
  case "%":
    resultado = operando1 % operando2;
    console.log(resultado);
    break;
  default:
    console.log(
      "Datos introducidos incorrectamente, por favor reinicie la aplicación y reintroduzcalos de nuevo."
    );
}
