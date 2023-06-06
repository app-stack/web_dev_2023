//https://pydefis.callicode.fr/defis/VitesseLumiere/txt

let x = 997;
let y = 312;
let z = 663;

while(10*x > y) {
  x = (y*z) % 10000;
  y = (3*z) % 10000;
  z = (7*z) % 10000 ;
}

console.log("La solution est :", x, y, z);
console.log("...");

//https://pydefis.callicode.fr/defis/SpymasterBomb/txt

let total = 0; // Je pars de 0

for(let i = 1 ; i < 1435 ; i++) { // Pour i qui compte de 1 à 1435
  if(i%3 == 0 || i%5 == 0) {  // Si (i est un multiple de 3) OU (i est un multiple de 5)
    total = total + i; // J'ajoute i à ce que j'ai déjà compté
  } // Sinon je ne fais rien
}

// Une fois la boucle terminée, je regarde le contenu de la variable :
console.log("Le résultat est :", total);