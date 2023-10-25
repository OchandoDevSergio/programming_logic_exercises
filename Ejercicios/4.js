/* Crea una aplicación que nos calcule el área de un círculo, cuadrado o triángulo. 
Pediremos al usuario que figura queremos calcular su área y según lo introducido 
pedirá los valores necesarios para calcular el área. Para ello has de crear un método 
por cada figura para calcular cada área, este devolverá un número real. Muestra el 
resultado por consola.
Aquí te mostramos que necesita cada figura:
 • Círculo: (radio^2)*PI
 • Triángulo: (base * altura) / 2
 • Cuadrado: lado * lado */


//OPCION SWITCH

let claseFigura;

while (
  claseFigura !== "circulo" &&
  claseFigura !== "triangulo" &&
  claseFigura !== "cuadrado"
) {
  claseFigura = prompt(
    "¿De qué clase de figura se trata? Recuerde no añadir caracteres adicionales."
  );
}

//Llegados a este punto, mediante switch analizaremos la opcion escogida, que gracias al while anterior
//sabemos que va a ser una de las que nos interesa que sea.

let resultado = 0;

switch (claseFigura) {
  case "circulo":
    const Pi = 3.14159;
    let radio = parseFloat(
      prompt("Introduzca el valor del radio de la figura.")
    );
    resultado = radio ** 2 * Pi;
    console.log(resultado);
    break;
  case "triangulo":
    let base = parseFloat(
      prompt("Introduzca el valor de la base de la figura.")
    );
    let altura = parseFloat(
      prompt("Introduzca el valor de la altura de la figura.")
    );
    resultado = (base * altura) / 2;
    console.log(resultado);
    break;
  case "cuadrado":
    let lado = parseFloat(prompt("Introduzca el valor del lado de la figura."));
    resultado = lado ** 2;
    console.log(resultado);
    break;
  default:
    console.log(
      "Error, reinicie la aplicación e introduzca de nuevo de qué clase de figura se trata."
    );
};


//OPCION IF

// let claseFigura = prompt(
//   "¿De qué clase de figura se trata? Recuerde la acentuación y no añadir caracteres adicionales."
// ).toLowerCase();
// const Pi = 3.14159;
// if (claseFigura == "círculo") {
//   let radio = parseFloat(prompt("Introduzca el valor del radio de la figura."));
//   console.log((radio ^ 2) * Pi);
// } else if (claseFigura == "triángulo") {
//   let base = parseFloat(prompt("Introduzca el valor de la base de la figura."));
//   let altura = parseFloat(
//     prompt("Introduzca el valor de la altura de la figura.")
//   );
//   console.log((base * altura) / 2);
// } else if (claseFigura == "cuadrado") {
//   let lado = parseFloat(prompt("Introduzca el valor del lado de la figura."));
//   console.log(lado * lado);
// } else {
//   console.log(
//     "Error, reinicie la aplicación e introduzca de nuevo de qué clase de figura se trata."
//   );
// }


