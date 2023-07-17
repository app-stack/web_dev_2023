console.log('Bienvenue dans Javascript');

/**
 * **************************************
 * 2-VARIABLES
 * **************************************
 */
//! On déclare une variable avec let ou const (ou var dans les anciennes versions de JS)
let maVariable;
//! On assigne une valeur à une variable avec le signe =
maVariable = 'Hello World';
console.log(maVariable);

//? Les types de variables (JS utilise un typage dynamique)
let uneString = 'MDR';
let unNombre = 11;
let unBooleen = true;
let unTableau = [1,2,3,'Hello'];
let unObjet = { 
    propriete1 :  22,
    propriete2:'LOL'
};
//! Spoiler : on déclare une fonction comme ceci 👇
function testFunction (){
    console.log('Fonction de Test ?');
}
//? Bonus 💡: on peut placer une fonction dans une variable
let uneFonction = function maFonction (){
    console.log('Fonction qui affiche HelloWorld');
}

console.log(uneString);
console.log(unNombre);
console.log(unBooleen);
console.log(unTableau);
console.log(unObjet);
//* Sans les ( ) on fait référence à la ƒ°
console.log(uneFonction);
//* là avec les () on éxecute la ƒ°
console.log(uneFonction());


//Exercice 2
let a = 2;
let b = 3;
let c = 5;

console.log(a*b+c);
console.log(c+=10);
console.log(b/=2);
console.log(a*=20);

console.log((a*c)+(c/b));


//** 3-CALCULS */ 

console.log(42*675);
let unChiffre = 9;
let Nombre = 33;
console.log(unChiffre*Nombre);
//! Ne pas se faire troll par les nombre à ,
console.log(2,9+1,3);
//? La notation en point : 
console.log(2.9+1.3);
console.log((1+1)-(2*3)/2);
console.log(10%2);
let unCompteur = 0;
console.log(unCompteur+1);
unCompteur = 0;
unCompteur = unCompteur+1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur = unCompteur + 1
unCompteur +=1;
console.log(unCompteur);
unCompteur = 0;
//* unCompteur + 1
unCompteur ++;
console.log(unCompteur);
//* unCompteur - 1
unCompteur --;
console.log(unCompteur);
//* unCompteur = unCompteur + 10
unCompteur +=10;
console.log(unCompteur);
//* unCompteur = unCompteur x 10
unCompteur *=10;
console.log(unCompteur);
//* unCompteur = unCompteur / 10
unCompteur /=10;
console.log(unCompteur);
//* unChiffre puissance 9
console.log(unChiffre**9);


//* PIZZA EXO


let FirstName = "Yohan";
let blague = `Qu'est-ce qu'une pizza a dit à une autre pizza qui lui demandait des conseils? 
'Suis ta pâte et tout ira bien! `;
let pizzaName = "La pizzeria Raffinatta"; 
console.log(`Bonjour ${FirstName} , merci beaucoup pour la commande passée chez ${pizzaName} 

${blague}`);


/**
 * **************************************
 * 4-STRINGS
 * **************************************
 */
let bonjour = 'Bonjour';
let unMessage = "Bienvenue";
let welcome = `Bienvenue`;
console.log(bonjour,unMessage);
let unTexte = "Bonjour \"MR Gingle\"";
let unTxt = 'Aujourd\'hui';
console.log(unTexte,unTxt);
let concatenation = bonjour + " et " + unMessage +', il fait beau temps' + unTxt;
console.log(concatenation);
let uneTemplateString = `Hello ! ${bonjour} et ${unMessage}
on retourne à la "ligne" plus besoin des 'antislash'`;
console.log(uneTemplateString);

//* Exemple la "Pizzeria Rafinata"
let product = 'Pizza Hawaienne';
let nomUser = 'Jean Jack';
let date = '12-12-2012';
let nomPizzeria = `"La Pizzeria Rafinata"`
let SumUpOrderPhrase = `le ${date} Bonjour cher ${nomUser}, merci d'avoir passé commande chez ${nomPizzeria}, votre pizza :  ${product}, arrive sous 30 minutes


Qu'est-ce qu'une pizza dit à une autre pizza qui lui demandait 
des conseils ? "Suis ta pate et tout ira bien"`;

console.log(SumUpOrderPhrase);


//*ARRAYS

let Names = [`Mathiew`, "Mark", "Luke", "John"];

let ages = [35, 34, 33, 32];

let passion = [`They love to preach the Gospel of Jesus`, `Surf`];
let tabUser = [ Names, ages, passion ];
console.log(tabUser);
console.log(tabUser[2][1]);

/**
 * **************************************
 * 5-ARRAYS
 * **************************************
 */
let prenom = 'JoSé';
let age = 45;
//! On déclare un tableau avec cette syntaxe : []
//! On peut placer ce que l'on veut dans un tableau 
let unTTableau = [12,'Salut ca va bien?',prenom,age];
console.log(unTTableau);
console.log(unTTableau[2]);
//! Exemple avec un tableau dans un tableau 
let mesPassions = ["Boxe","Jonquilles"];
let monPerso = [prenom, age, mesPassions];
//! Avec le système d'index / indice on peut accèder
//! au contenu d'une case du tableau.
//! La 1ère case du tableau est à l'indice 0.
console.log(monPerso[2]);
console.log(monPerso[2][1]); 


//? On peut modifier les cases d'un tableau.
monPerso[0] = 23;
monPerso[1] = 'YOLO';
monPerso[2][1] = 'COOL';
console.log(monPerso);
//! On peut utiliser la propriété length,
//! .length sur le tableau en lui même 
//! nous renvoi le nombre de case du tableau
console.log(monPerso.length);
//! .length sur une case précise du tableau 
console.log(monPerso[2].length);


//! On peut utiliser la propriété length,
//! .length sur le tableau en lui même 
//! nous renvoi le nombre de case du tableau
console.log(monPerso.length);
//! .length sur une case précise du tableau 
console.log(monPerso[2].length);
let mesNombres = [100,200,300];
//! La méthode push permet d'ajouter des éléments dans le tableau
mesNombres.push('Top Génial');
console.log(mesNombres);
//! La méthode pop permet de supprimer le dernier élément dans le tableau
mesNombres.pop();
console.log(mesNombres);


//***4

let leNom = "GENTIL" ;
let lePrénom = "Rémi";
let leTableau = [];
let Initiales = leNom[0] + lePrénom[0];
leTableau.push(leNom, lePrénom, Initiales);
console.log(leTableau);
console.log(leNom[3]);
console.log(leTableau[0]);


let superTab = [];
let firstname = 'JOJO';
let lastname = 'La Menace';
let initiales = firstname[0] + lastname[0]

superTab.push(firstname,lastname,initiales);
console.log(superTab);

//***FUNCTIONS */

let n = "number";
function Number (n) {
    console.log(33+m),
};


















/**
 * **************************************
 * 1-SETUP : DEFER
 * **************************************
 ** Antérieur à la vague HTML5, l'attribut defer existait déjà dans les "anciennes" versions
 ** d'Internet Explorer. Il signifie que le navigateur 
 *! peut charger le(s) script(s) en parallèle, sans stopper le rendu de la page HTML.
 *! Contrairement à async, l'ordre d'exécution des scripts est préservé,
 *! en fonction de leur apparition dans le code source HTML. 
 *? Il est par ailleurs reporté à la fin du parsing du DOM (avant l'événement DOMContentLoaded).
 * De nos jours, cet attribut présente moins d'intérêt car les navigateurs
 * disposent par défaut de techniques internes pour télécharger les 
 * ressources en parallèle sans nécessairement attendre les autres.
 */

/**
 * **************************************
 * SETUP : ASYNC
 * **************************************
 * *Nouveau venu dans HTML5, async signifie que le script pourra être exécuté de façon asynchrone,
 ** dès qu'il sera disponible (téléchargé). Cela signifie aussi que le navigateur 
 ** n'attendra pas de suivre un ordre particulier si plusieurs balises <script> sont présentes,
 ** et ne bloquera pas le chargement du reste des ressources, notamment la page HTML. 
 *? L'exécution aura lieu avant l'événement load lancé sur window 
 *? et ne sera valable que pour les scripts externes au document, 
 *? c'est-à-dire ceux dont l'attribut src mentionne l'adresse.
 *? Ce comportement est bien pratique pour gagner en temps de chargement,
 *! il faut cependant l'utiliser avec prudence : si l'ordre n'est pas respecté,
 *! un fichier exécuté de façon asynchrone ne pourra attendre le chargement d'un précédent,
 *! par exemple s'il en utilise des fonctions voire un framework.
 *! Il ne faudra pas non plus compter appeler document.write() pour écrire dans le document HTML
 *! puisqu'il sera impossible de savoir à quel moment les actions seront déclenchées.
 */ 