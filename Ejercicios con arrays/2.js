// 2. Crea un array con los nombres de los planetas del Sistema Solar. Crea una
// función que los liste y los saque por consola.

let arrPlanetas = [
  "Mercurio",
  "Venus",
  "Tierra",
  "Marte",
  "Júpiter",
  "Saturno",
  "Urano",
  "Neptuno",
];

const Planetas = (arrPlanetas) => {
  for (let i = 0; i < arrPlanetas.length; i++) {

    console.log(i + 1, arrPlanetas[i]);
  }
};

Planetas(arrPlanetas);
