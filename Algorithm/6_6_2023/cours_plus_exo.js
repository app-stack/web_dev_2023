
//Les fonctions :
// Point de vue interne (création de la fonction, "je" suis dans la boîte noire)
// Squelette de la création d'une fonction
function nomFonction() {

}

function sayHello() {
    // Code exécuté par la fonction quand elle est utilisée
    console.log("Hello");
}

// Point de vue externe (j'ai des fonctions "devant moi" et je veux les utiliser
// Les parenthèses signifient démarrer la fonction (appeler, exécuter, lancer, ...)
sayHello();


// Point de vue interne
// On peut créer des fonctions qui s'attendent à recevoir des valeurs
function sayHi(name) {
    // La variable name est automatiquement créée lorsque la fonction est utilisée. Elle contiendra la valeur transmise par l'utilisateur.
    // name est un argument de la fonction
    // Une fois que la fonction est terminée, la variable est détruite.
    console.log("Hi", name);
}

// Point de vue externe
sayHi("Pierre");
sayHi("Bob");

// Point de vue interne
// Une fonction peut retourner une valeur (elle donne un résultat)

function carre(n) {
    // On aurait pu se passer de la variable et faire :
    // return n*n;
    let variable_intermediaire = n*n;
    return variable_intermediaire;

    // return signifie :
    // - on s'arrête là
    // - le résultat est :
}

// Point de vue externe
carre(7);
50;

console.log(50);
console.log(carre(7));
// console.log(valeur_intermediaire);
// Erreur : la variable n'existe pas

/*
function f(n) {
    console.log("On m'a donné la valeur", n);
    return 3*n+1;
    console.log("Le résultat trouvé est", 3*n+1);
}

console.log("Bonjour");
let a = 10;
console.log(f(a));
console.log("Au revoir");

console.log(f(f(2)));



function f(n){
    console.log("On m'a donné la valeur", n);
    return 3*n+1;
    console.log("Le résultat trouvé est", 3*n+1);
}

console.log("Bonjour");
let a = 10;
console.log(f(a));
console.log("Au revoir");

console.log(f(f(2)));
*/
