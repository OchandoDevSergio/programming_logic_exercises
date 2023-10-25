
/* Lee un número por teclado e indica si es divisible entre 2 (resto = 0). Si no lo es, 
también debemos indicarlo.*/

let numero = parseFloat(prompt("Introduzca el número."));

if (numero % 2 == 0) {
  console.log("Se trata de un número par.");
} else {
  console.log("Se trata de un número impar.");
}

//OPCION TERNARIA
//    let numero = parseFloat(prompt("Introduzca el número."));
//    let paridadNumero = (número % 2 == 0)
//      ? "Se trata de un número par."
//      : "Se trata de un número impar.";


