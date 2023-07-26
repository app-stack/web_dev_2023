console.log ("Bienvenue dans Javascript");

//! EXO LOAD
// ** addEventListener - load
// TODO 1: récupérer toutes les images dans une variable lesImages
// TODO 2: Dans une v ariable tabImg on transforme lesImages en tableau avec Array.from()
// TODO 3-1: Sur tabImg on utilise la fonction map().
// TODO 3-2: Dans map(), on lui passe une F => qui prend 2 params : uneImage et index
// TODO 3-3: Dansla F =>, sur uneImage on place un addEventListener qui écoute "load" et éxecute une Fonction
// TODO 3-4: Dans la F du addEventListener, on affiche index en consoles

let lesImages = document.getElementsByTagName("img");
console.log(lesImages);
let tabImg = Array.from(lesImages);
let map1 = tabImg.map(function (uneImage, index) {
    uneImage.addEventListener ('load', () => {
        console.log (`Images numéro : `, index, ` - vient de finir de charger`);
    })
})

console.log("-----------------------------");

//! EXO LOAD
// ** addEventListener - load
// TODO 1: récupérer toutes les images dans une variable lesImages
// TODO 2: Dans une variable tabImg on transforme lesImages en tableau avec Array.from()
// TODO 3-1: Sur tabImg on utilise la fonction map().
// TODO 3-2: Dans map(), on lui passe une F => qui prend 2 params : uneImage et index
// TODO 3-3: Dansla F =>, sur uneImage on place un addEventListener qui écoute "load" et éxecute une Fonction
// TODO 3-4: Dans la F du addEventListener, on affiche index en consoles
let les_Images = document.querySelectorAll(`img`);
console.log(les_Images);
let tab_Img = Array.from(les_Images);
console.log(tab_Img);
tabImg.map(function (uneImage, index) {
    uneImage.addEventListener("load", function () {
    console.log(`Image numéro : ${index} – vient de finir de charger.`);
    });
});

console.log("----------------------------");


let Mon_Titre = document.querySelector('h3');
console.log(Mon_Titre);

// document.addEventListener ("mouseleave", function (){
//         Mon_Titre.style.display = "block";
// });

// document.getElementById("img1").addEventListener("mouseleave", function (){
//     Mon_Titre.style.display = "block";
// });

document.getElementById("mainContainer").addEventListener("mouseout", function (){
    Mon_Titre.style.display = "block";
});


console.log('--------------------------');

// !EXO 24.2 addEventListener - "mouseout" - display
// addEventListener - "mouseout" - display
// TODO: EN CSS le titre H3 à un display à none
// TODO 1: Dans une variable monTitre, récupérer le titre h3
// TODO 2: Sur document, placer un addEventListener qui écoute "mouseout" et qui execute une fonction
// TODO 3: dans cette fonction, on va modifier dans le style de monTitre le display que l'on met à "block"
const h3Title = document.querySelector('#mouseOut');
const mainContainer = document.querySelector('#mainContainer');
let lesImagesFirst = document.querySelectorAll(`img`)[0];

console.log(h3Title);
document.addEventListener('mouseleave',()=>{
    //? Comme vu pour les objets on peux accèder aux propriétés dans l'objet style de l'element 
    h3Title.style.display = 'block';
    h3Title.style.color = 'red';
    h3Title.style.backgroundColor = 'chartreuse';
    h3Title.innerText = 'Tu as gagné 100 millions de Dollars';
});


console.log('-----------------------------');

//** */

//FOCUS - BLUR

//
//! EXO 24.3  addEventListener - focus - blur
// TODO 1: récupérer l'input dans une variable leInput
// TODO 2-1: sur leInput, utiliser addEventListener pour surveiller "focus" 
// TODO 2-2:et execute une fonction qui modif la bg color de leInput en (couleur au choix)
// TODO 3-1: sur leInput, utiliser addEventListener pour surveiller "blur"
// TODO 3-2: et execute une fonction qui modif la bg color de leInput en blanc ou transparent

// let leInput = document.getElementById('myForm');
// console.log(leInput);

let leInput = document.querySelector('#titleInput');
console.log(leInput);

leInput.addEventListener("focus", function () {
    leInput.style.backgroundColor="chartreuse";
} )

leInput.addEventListener("blur", function () {
    leInput.style.color="transparent";
} )

// let leInput2 = document.querySelector('#formMessage');
// console.log(leInput2);

// leInput2.addEventListener("focus", function () {
//     leInput2.style.backgroundColor="Cyan";
// } )

// leInput2.addEventListener("blur", function () {
//     leInput2.style.color="transparent";
// } )



console.log("----------------------------");

const formTitleInput = document.querySelector('#titleInput');
// TEST avec FOCUS
formTitleInput.addEventListener("focus", function() {
    formTitleInput.style.backgroundColor = "royalBlue";
    formTitleInput.style.color = "white";
});
// TEST avec Blur
formTitleInput.addEventListener("blur", function() {
    formTitleInput.style.backgroundColor = "transparent";
    formTitleInput.style.color = "black";
});


console.log("----------------------------");


// ! Exo SCROLL
// ** addEventListener - capter un évènement "scroll" - scrollHeight  - innerHeight - scrollY
// TODO 1: Dans une variable laBar, récupérer la div qui possède la classe .bar
// TODO 2: Sur document, placer un addEventListener qui écoute "scroll" et execute une fonction
// TODO 3: dans cette fonction, on console log document.body.scrollHeight (la hauteur de page), innerHeight (hauteur de l'affichage) et scrollY (la position du scroll)
// TODO 4: Ensuite, dans une variable scrollMax, on soustrait à document.body.scrollHeight, innerHeight
// TODO 5: Dans une variable onEstOu, on fait un pourcentage de scrollY sur scrollMax
// TODO 6: Modifier dans le style de laBar, la width en lui assignant onEstOu en "%"

let laBar = document.querySelector('.bar');
console.log(laBar);
document.addEventListener("scroll", function () {
    console.log(document.body.scrollHeight);
    console.log(innerHeight);
    console.log(scrollY);
    let scrollMax = document.body.scrollHeight - innerHeight;
    let onEstOu = (scrollY / scrollMax) * 100 ;
    laBar.style.width = onEstOu + '%'; 
}
)



// console.log(`
// Hauteur page : ${document.body.scrollHeight}
// Hauteur affichage : ${innerHeight}
// Scroll Position : ${scrollY}
// pourcentage de scroll :${onEstOu} %`);

