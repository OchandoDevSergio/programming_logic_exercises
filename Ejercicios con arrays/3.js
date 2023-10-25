// 3. Crea una string, pásala a array y saca por consola la versión invertida de la
// original. Ejemplo: "Hola" -> [H, o, l, a] -> [a, l, o, H] -> "aloH"

// let string = prompt("Introduzca una cadena de carcateres.");
let string = "string";
let arr1 = string.split("");
console.log("string original", arr1);
let arr2 = [];
for (i = arr1.length - 1; i >= 0; i--) {
  arr2.push(arr1[i]);
}
console.log("string inversa", arr2);
