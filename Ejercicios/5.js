/* Crea una aplicación que nos genere una cantidad de números enteros aleatorios 
pasados por el usuario (prompt). Crea un método donde pasamos como parámetros 
entre que números queremos que los genere, podemos pedirlas al usuario antes de 
generar los números. Este método devolverá un número entero aleatorio. Muestra 
estos números por consola. */

function GeneraAleatorios(parametroMaximo, parametroMinimo) {
  let valorNumeroRandom =
    1 * (Math.floor(Math.random() * parametroMaximo) + parametroMinimo);

  return console.log(valorNumeroRandom);
}

let cantidadNumeros = parseInt(
  prompt("Introduzca la cantidad de números que desea que se generen.")
);

let maximo = parseInt(
  prompt(
    "Introduzca el valor máximo que desee que puedan alcanzar los números."
  )
);
let minimo = parseInt(
  prompt(
    "Introduzca el valor mínimo que desee que puedan alcanzar los números."
  )
);

for (let i = 0; i < cantidadNumeros; i++) {
  GeneraAleatorios(maximo, minimo);
}
