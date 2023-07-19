console.log("Bienvenue dans JavaScript")

//Exemple while 
let unIndex = 0;
while (unIndex < 10) {
    console.log("Le Nombre : " + unIndex);
    unIndex++;
};


//Liste Films
let listeFilm = ['Ultime Décision','Mission Alcatraz','Attack Force'];
//EXO FOR  : Via un système de boucle vous allez afficher chaque film du tableau en console.

console.log(listeFilm[0]);
console.log(listeFilm[1]);
console.log(listeFilm[2]);


    for (let i =0;i<listeFilm.length; i++) {
        console.log(listeFilm[i]);
    }

//
let liste2Film = ['Ultime Décision','Mission Alcatraz','Attack Force'];
//? Boucle for, on définit un index (ici c'est i), 
//? puis on définit une condition qui va définir le nombre de fois que le code dans la boucle sera éxecuter
//? puis on définit comment on passe à la prochaine itération de la boucle (ici i++, on augmente de 1 le numero de la case que l'on console.log)
for(i=0;i<liste2Film.length;i++){
    console.log('boucle FOR : ',liste2Film[i]);
};

//

listeFilm.forEach(uneCase => console.log(uneCase));
listeFilm.forEach(element => console.log(element));
listeFilm.forEach(unFilm => console.log(unFilm));

////? La méthode forEach() permet d'exécuter une fonction donnée sur chaque élément du tableau.
// ? On va choisir une variable temporaire pour parcourir les elements du tableau
listeFilm.forEach(unFilm => console.log('boucle forEach Tableau : ',unFilm));

//For...of
for (let unFilm of listeFilm) {
    console.log(unFilm);
}

for (let uneCase of listeFilm) {
    console.log(uneCase);
}

for (let element of listeFilm) {
    console.log(element);
}

////? L'instruction for...of permet de créer une boucle Array qui parcourt un objet itérable 
//? (ce qui inclut les objets Array, Map, Set, String, TypedArray, l'objet arguments, etc.) 
//? et qui permet d'exécuter une ou plusieurs instructions pour la valeur de chaque propriété.
// on définit une variable temporaire pour parcourir le tableau
for(let unElementTablo of listeFilm){
    console.log('boucle FOR...OF : ',unElementTablo);
};

// For...In
let usersData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

let text = "";
for (let element in usersData) {
    text += usersData[element];
}
console.log(text);

for (let property in usersData) {
    console.log (`${property} : ${usersData[property]}`);
}

//const = let 
// on définit une variable temporaire pour parcourir le objet :)
for(let cleObjet in usersData){
    console.log(`boucle FOR...IN (objet) : clé:${cleObjet} - valeur :  ${usersData[cleObjet]} `);
};


// //? Parcourir les Objet  (Depuis javaScript ES8)
//? La Method .keys() qui convertit les clés d'un objet en tableau
//? La Method .values() qui convertit les valeurs d'un objet en tableau
//? La Method .entries() qui renvoit un tableau dans un tableau pour combiner clé - valeur
const keyUser = Object.keys(usersData);
console.log("les clé de l'objet converties en array : ",keyUser);

const valuesUser = Object.values(usersData);
console.log("les valeur de l'objet converties en array : ",valuesUser);

const convertedDataUser = Object.entries(usersData);
console.log("les entrées de l'objet converties en array : ",convertedDataUser);


//
let lesTxt = document.getElementsByTagName('p');
console.log(lesTxt);

console.log(lesTxt[0]);


////* On récupère TOUS les <p>
const lesTxts = document.body.getElementsByTagName("p");
// const lesTxt = document.getElementsByTagName("p");
console.log(lesTxts);
//HTMLCollection a un système d'indice aussi comme les tableau
console.log(lesTxts[0]);

//

let textes = "ABCDEFG"
const myArr = Array.from(textes);
console.log('---');
console.log(textes);
console.log(myArr);

//
const textab = Array.from(lesTxt);
console.log(textab);

//
//* On transforme le HTMLCollection(qui contient tous nos <p>) en Array classique
const textesTab = Array.from(lesTxt);
console.log(textesTab);

const array1 = [1, 4, 9, 16];

// Pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// Expected output: Array [2, 8, 18, 32]

// InnerText
// InnerHTML

console.log(lesTxt[0]);
lesTxt[0].innerText = 'SUPER'; 

//TODO Sur textesTab on va utiliser la ƒ° map(),
//TODO dans map(), on va lui passer en param une fonction fléchée qui elle a en parametre une variable temporaire (auChoix)
//TODO cette fonction fléchée elle va modifier le innerHTML ou innerText de la variable temporaire

textesTab.map(uneCase => uneCase.innerText='Je suis HACKERMAN');
//ça reste toujours du texte


textesTab.map(uneCase => uneCase.innerHTML = "<h1>LOL JE SUIS HACKERMAN</h1>" );
//le navigateur comprend les tags html et les convertit 

//Modifie toute la page et tous les paragraphes deviennent 'Je suis HACKERMAN');
//textesTab.map(uneCase => uneCase.innerText = "<h1>LOL JE SUIS HACKERMAN</h1>" );
//textesTab.map(uneCase => uneCase.innerHTML = "<h1>LOL JE SUIS HACKERMAN</h1>" );

//? bonus syntaxe en ƒ° classic
//! Dans la fonction que l'on passe dans map(), si on met un 2nd param
//! C'est l'index du tableau
// textesTab.map(function(x,i){
//     x.style.color = "red";
//     console.log(i)
// });

//? bonus syntaxe en ƒ° fléchée
// textesTab.map((x,i) => {
//     x.style.color = "red";
//     console.log(i)
// });

//? Bonus II le retour : utilisation de map pour placer un addEventListener sur chaque <p>
textesTab.map(toto => toto.addEventListener('click',function(){
    console.log("SUPER CA CLICK")
}));

//Quiz
// var voiture = "Renault";
// console.log(voiture);
// var voiture = "BMW";
// console.log(voiture);
var voiture1 = "Renault";
console.log(voiture1);
var voiture2 = "BMW";
console.log(voiture2);

////!Quizz : ca bug
// console.log(bolide);
// var bolide = 'Jaguar';

//On remplace var au commencement
var bolide = 'Jaguar';
console.log(bolide);

//On remplace var par let et on declare au commencement
// let bolide = 'Jaguar';
// console.log(bolide);

//SCOPE
// function choixVoiture(){
//     var uneVoiture = "Harley Davidson"
// }

// choixVoiture();
// console.log(uneVoiture);
//Uncaught ReferenceError: uneVoiture is not defined
//at java.js:211:13
// une Voiture est dejà declarée dans la fonction, il lui faut la déclarer en dehors de la fonction, ensuite console.log  

var uneVoiture = "Harley Davidson"
function choixVoiture(){
}

choixVoiture();
console.log(uneVoiture);


//
// var car = "Nissan";

// if(car=="Nissan"){
//     var vitesse = 800;
// }
// console.log(vitesse);
// Dans le VAR, le scope est basé sur la fonction générale, tandis que dans le let le scope est basé sur le bloc de code

// const est une variable que l'on ne peut modifier (un peu comme le id dans le html)

// const superConstante = 'YES';
// superConstante = 12;

// Les constantes sont une variables et nous avons decidé de ne pas les changer
// const unNombre = 1;
// console.log(unNombre);

// unNombre++
// console.log(unNombre); 


//! Exception constante modif ? 
const MyTracklist = {
    track1:'lofteurs up and down',
    track2:'David Hallyday',
    track3:'Crazy Frog'
}
// console.log(MyTracklist);

MyTracklist.track1 = 'félicien'
console.log(MyTracklist);

//On peut modifier mettre par exemple myTracklist.propriété = 

//! Exception constante ajout ? 

// console.log(MyTracklist);

MyTracklist.track4 = 'félicien'
console.log(MyTracklist); 

//On rajoute track4 dans la liste

// EXO  : 

// Stocker tous les <p> dans une variable et on l'affiche en console

// Stocker tous les <p> qui ont une classe "super" dans une variable et on l'affiche en console

// Stocker LE <p> qui a un id "special" dans une variable et l'afficher en console

//Tout le paragraphe avec le tag 'p' 
let HTML = document.getElementsByTagName("p");
console.log (HTML);

//Tout le paragraphe avec la classe 'super' 
let ClassSuper = document.getElementsByClassName("super")
console.log(ClassSuper);

//Tout le paragraphe avec le id 'special' 
let Id_special = document.getElementById("special");
console.log(Id_special);