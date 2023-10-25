/* Crea una aplicación que nos pida un número por prompt y con un método se lo 
pasamos por parámetro para que nos indique si es o no un número primo, debe 
devolver true si es primo sino false. Un número primo es aquel solo puede dividirse 
entre 1 y sí mismo. Por ejemplo: 25 no es primo, ya que 25 es divisible entre 5, sin 
embargo, 17 si es primo. */

let numero = parseInt(prompt("Por favor introduzca el número."));


function CheckPrimo(numero){

   let esPrimo = true;

   if (numero < 1) {
       return esPrimo = false;
   }

   //Al cumplirse el if y entrar en la condicion anterior, topamos con el return, 
   //por lo tanto saldriamos de CheckPrimo y ya no comprobaríamos nada más.

   for (let i = 2; i < numero; i++) {
     if (numero % i === 0) {
       return esPrimo = false;
     }
   }

    return esPrimo;
}

let resultado = CheckPrimo(numero);

if (resultado) {
  console.log(`${numero} se trata de un número primo.`);
} else {
  console.log(`${numero}, no se trata de un número primo.`);
}
