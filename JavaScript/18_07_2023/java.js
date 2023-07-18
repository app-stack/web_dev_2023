console.log('Bienvenue dans Javascript');
let wtf = 9;
function buggyFunction() {
    
    console.log(wtf);
}; 
buggyFunction();
console.log(wtf);

// 18_07_2023

let something = 44;
function functionBugParent() {
    let something = 9;
    function functionBugEnfant() {
        let lesNews = `il est 99h67`;
        console.log(lesNews);
    }
    console.log(something);


    
};
functionBugParent();

console.log(something);

// Mark pass

//let notePhilo = 10;
//let noteSport = 14;

function pass (notePhilo,noteSport){
    return (notePhilo + noteSport) / 2
}
console.log(pass(10,14));

//! EXO 5.2 : La moyenne de 2 notes 
//TODO: Créer une fonction qui calcule la moyenne de 2 notes
//TODO: Afficher le résultat en console
let noteSport = 8;
let notePhilo = 2;
let resultatMoy = moyenne2notes(notePhilo,noteSport);
// On peut executer la ƒ° AVANT de la définir (pas d'ordre pour décrire les fonctions)
function moyenne2notes(a,b){
    return (a+b)/2;
};
console.log('La moyenne des 2 notes : ',resultatMoy);

//

//! Syntaxe ES6 Fonction fléchée (c'est beaucoup utilisé nottament dans des framework - librairies)
let somme = function(a, b) {
    return a + b;
};
//! Avant la => on a les paramètres, Après la => on a ce que ca return
let leCalcul = (a, b) => a + b;
console.log(leCalcul(1, 2));


///

document.addEventListener('click',(clickEvent)=>{
    console.log(clickEvent);
    console.log(`Tu as clické ici : 
    X : ${clickEvent.x} - Y : ${clickEvent.y}
    à ce moment : ${clickEvent.timeStamp}`);
});

///

/**
 * **************************************
 * 7- Les opérateurs
 * **************************************
 */
//! Les booléens : 2 états possibles TRUE ou FALSE (vrai ou faux)
let a = 11;
let b = 99;
console.log("variable a:",a);
console.log("variable b:",b);
//! avec == on demande si a est égal à b
console.log("c'est égal ? :",a == b);
//!pour vérifier si a est différent de b on utilise !=
console.log("C'est inégal ? :",a != b);
//! Ensuite on retrouve les même opérateurs qu'en Mathématique
//! ici on demande si a est strictement suppérieur à b
console.log("Strictement suppérieur ? :",a > b);
//! ici on demande si a est strictement inférieur à b
console.log("Strictement inférieur ? :",a < b);
//! ici on demande si a est inférieur ou égal à b
console.log("Inférieur ou égal ? :",a <= b);
//! ici on demande si a est suppérieur ou égal à b
console.log("suppérieur ou égal ?:",a >= b);
//? Attention : de base JS ne prend pas en compte le typage des variables : 
//? ci dessous le nombre 2 est égal au caractère "2" 🤔
console.log("le chiffre 2 = \"2\"?:",2 == "2");
//! Pour prendre en compte le type des donnée que l'on compare, on utilise l'opérateur ===
//! c'est l'égalité stricte
console.log("égalité stricte ?:",2 === "2");
//! il y a aussi l'inégalité stricte avec l'opérateur !==
console.log("inégalité stricte ?:",2 !== "2");
//? il existe aussi des opérateurs Logiques qui nous permet de combiner des conditions
//? && pour dire ET
//? || pour dire OU
//? ! pour dire Différent de
console.log(3==3 && 3<4);
console.log(3==3 || 3<4);

//
// CONDITION TERNAIRES
//!-------CONDITIONS / Operateur TERNAIRES-------
// ? on combine un opérateur de comparaison et l'opérateur ? pour établir une condition qui return une chose ou une autre chose
// ? cela permet de faire une condition if (simple) avec une syntaxe racourcie
let whatIsYourAge = 6;
console.log(whatIsYourAge >18 ? '🍹':'👮‍♂️');
// Astuce pour check si une variable est définie (si ya QQchose dans son espace mémoire)
let userPremium;
// On check si une variable est définie la condition c'est juste uneVariable ?
console.log(userPremium?'OK 🤙':'Not OK 👺');
// ↑ c'est l'équivalent de ↓
console.log(userPremium ==true?'OK 🤙':'Not OK 👺');
// on doit lui assigner QQCHOSE
userPremium = 'YES';
console.log(userPremium?'OK 🤙':'Not OK 👺');

// ? On peut utiliser des operateur aussi pour combiner des conditions && (pour ET) || (pour OU)
console.log(3==3&&3<4);
let typeUtilisateur = 'Extra';
console.log(typeUtilisateur == 'Extra' || typeUtilisateur == 'Premium');

/// BAC

let tablemark = [16,17,15];

function tableResult (tab) {
    let somme =0;
    for(let i = 0;i<tab.length;i++){
        somme += tab[i];

    }
    if(somme/tab.length>=15){
        console.log(somme/tab.length);
        console.log("mention très bien");
    }
    
    else if(somme/tab.length>=10){
        console.log(somme/tab.length);
        console.log("mention assez bien");
    }

    else{
        console.log(somme/tab.length);
        console.log("c'est refusé")
    }

}
tableResult (tablemark);

//

function msgMentionBacOfficiel(tabNotes) {
    let moyenneCalc = (tabNotes[0]+tabNotes[1]+tabNotes[2])/tabNotes.length;
    console.log('la Moyenne au Bac : ',moyenneCalc);
    if (moyenneCalc >=16) {
        return "Tu as Gagné !"
    } else if (moyenneCalc >=10 && moyenneCalc<16) {
        return 'Assez Bien'
    } else {
        return 'YO T NUL GRO'
    }
};
console.log(msgMentionBacOfficiel([13,6,3])); 


//Arrondi
//Math.ceil => arrondi vers le haut
//Math.round => arrondi vers le plus proche (0.5 vers 1 et entre 0 et 0.5 vers 0.5)
//Math.floor => arrondi vers le bas

// ? syntaxe  { uneProprieté:uneValeur } 
// ? dans un objet on assigne avec : plutot qu'avec = 
let user = {
    id:3657826,
    'name':'Seagal',
    firstname:'Steven',
    badges:['🎥','👮‍♂️','🎸','🥋','🎤']
};
console.log(user);

console.log(user.name);
console.log(user.id);
//*Syntaxe en mode tableau associatif
console.log(user['id']);

//

//On peut supprimer une propriété
//delete user.badges;

// ? On peut ajouter simplement des propriétés dans un objet avec une assignation de valeur
// ? Si on assigne à une propriété déjà existante cela écrase la valeur
// ? Mais Si on assigne à une propriété non existante cela créee la propriété
user.dps = 9999;

// ? On peut supprimer une propriété 
delete user.badges;

// ? une ƒ° native de JS poour connaitre les propriétés d'un objet, hasOwnProperty()
let menuDuJour={
    entree:"Bassine d'Aioli",
    plat:"Rat Adulte",
    dessert:'île Fidji'
};
console.log(menuDuJour);
console.log(menuDuJour.hasOwnProperty('entree'));

//

let myUser = {
    firstnames : "Gadji",
    old : 50,
    passion : {
        firstpassion : "developer", 
        secondpassion : "create website",
    } 

}
console.log(myUser.firstnames);
console.log(myUser.old);
console.log(myUser.passion);
console.log(myUser.passion['secondpassion']);
console.log(myUser.passion.secondpassion);

