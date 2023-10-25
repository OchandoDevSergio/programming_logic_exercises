// 7. Dados los arrays javascript1 = ["DOM", "BOM", "Funciones", "Arrays"] y
// javascript2 = ["Objetos", "Arrays", "ParseInt"], crea una función que determine si se
// repite algún elemento y lo saque por consola.

let javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
let javascript2 = ["objetos", "Arrays", "ParseInt"];

const Iguales = (javascript1, javascript2) => {
  for (i = 0; i < javascript1.length; i++) {
    let comparador = javascript1[i];
    switch (comparador) {
      case javascript2[0]:
        console.log(comparador);
        break;
      case javascript2[1]:
        console.log(comparador);
        break;
      case javascript2[2]:
        console.log(comparador);
        break;
      default:
        break;
    }
  }
};
Iguales(javascript1, javascript2);
