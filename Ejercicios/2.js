
/*Escribe una aplicación con un String que contenga una contraseña cualquiera. 
Después se te pedirá que introduzcas la contraseña, con 3 intentos. Cuando 
aciertes ya no pedirá más la contraseña y mostrará un mensaje diciendo 
“Enhorabuena”. Piensa bien en la condición de salida (3 intentos y si acierta sale, 
aunque le queden intentos).*/

//METODOLOGÍA CON BUCLE WHILE

let contraseña = "password";

let intentos = 1;

while(intentos < 3){

    let input = prompt("Por favor introduzca contraseña");

    if(input === contraseña){
        console.log(`Enhorabuena, has acertado y has usado ${intentos} intentos`);
        break;
    } else {
        intentos++;
    }

}

if(intentos === 3){
    console.log("Game over")
}



//METODOLOGÍA CON IF Y ELSE

// let contraseña = "password";

// let input = prompt("Por favor introduzca contraseña");

// if (contraseña === input) {
//   console.log("Enhorabuena.");
// } else {
//   let input = prompt("Segundo intento.");
//   if (contraseña === input) {
//     console.log("Enhorabuena.");
//   } else {
//     let input = prompt("Tercer intento.");
//     if (contraseña === input) {
//       console.log("Enhorabuena.");
//     } else {
//       console.log("game over");
//     }
//   }
// }