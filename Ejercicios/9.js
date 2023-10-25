/*Crea una aplicación que nos convierta una cantidad de euros introducida por prompt
a otra moneda, estas pueden ser a dólares, yenes o libras. El método tendrá como 
parámetros, la cantidad de euros y la moneda a pasar que será una cadena, este no 
devolverá ningún valor, mostrará un mensaje indicando el cambio.
El cambio de divisas es:
• 0.86 libras es un 1 €
• 1.28611 $ es un 1 €
• 129.852 yenes es un 1 €*/

let divisaFinal = prompt("Por favor introduzca el nombre de la divisa a la que intercambiar. No olvide la acentuación.").toLowerCase();
let valorEuros = parseFloat(prompt("Por favor introduzca el valor de euros a intercambiar."));
let valorDivisa = 0;
function IntercambioDivisas (valorEuros, divisaFinal) {
    switch (divisaFinal) {
    case "libras":
        valorDivisa = valorEuros * 0.86;
        break;
    case "dólares":
    case "$":
        valorDivisa = valorEuros * 1.28611;
        break;
    case "yenes":
        valorDivisa = valorEuros * 129.852;
        break;
    default:
        console.log("Error, reinicie la aplicación.");
        break;
    }
}
IntercambioDivisas (valorEuros, divisaFinal);
console.log (valorDivisa);