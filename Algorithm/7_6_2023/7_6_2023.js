//Les tableaux :
// Création d'un tableau
let tab = [2, 17, 23];
// Automatiquement, les cases sont numérotées 0, 1 et 2.

// Accéder à une case du tableau
tab[0] // La case numéro 0 du tableau tab
// Écrire dans la console le contenu de la case numéro 0 de tab :
console.log(tab[0]);
// Modifier la case numéro 1 de tab :
tab[1] = 47;

console.log(tab); // Attention, peut être trompeur !

// Ajouter une nouvelle case à la fin du tableau :
tab.push(99);
//99 est le contenu de la case

// Retirer la dernière case du tableau :
tab.pop();
// La fonction .pop donne un résultat : c'est ce qui était dans la case qui vient d'être supprimée.
console.log(tab.pop());

// Taille du tableau
// Variable qui contient automatiquement le nombre de cases du tableau
tab.length
// On va seulement lire cette variable, pas la modifier
console.log("Le tableau tab contient", tab.length, "cases.");

console.log("..........");

/* if(age < 18) {
    console.log("La personne est mineure.");
} else {
    console.log("La personne est majeure.");
}

if(age2 < 18) {
    console.log("La personne est mineure.");
} else {
    console.log("La personne est majeure.");
}

if(age3 < 18) {
    console.log("La personne est mineure.");
} else {
    console.log("La personne est majeure.");
}
*/

let age = 17;
let age2 = 24;
let age3 = 2;

let ages = [17,24,2, 7, 123, 999, 25, 14];

function displayMessage(age) {
    if(age < 18) {
        console.log("La personne est mineure.");
    } else {
        console.log("La personne est majeure.");
    }
}

//displayMessage(age);
//displayMessage(age2);
//displayMessage(age3);
displayMessage(ages[0]);
displayMessage(ages[1]);
displayMessage(ages[2]);

console.log("Avec une boucle :");
for(let i = 0 ; i < ages.length ; i++) {
    console.log("[INFO] La variable i contient", i);
    displayMessage(ages[i]);
}