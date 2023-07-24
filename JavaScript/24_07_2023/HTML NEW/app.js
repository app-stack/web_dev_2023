console.log('Bienvenue sur Javascript');

// firstImg.addEventListener('click',()=>{
//     console.log('CA CLICK A DONF');
//     });

let firstTitle = document.querySelector('h1');

firstTitle.addEventListener('click', ()=>{
    firstTitle.innerText = "Title has changed";
}
)

console.log('Bienvenue sur Javascript');
console.log('------------------------');

// * addEventListener - click
//? Mode ƒ° => (anonyme + fléchée) 
let leH1 = document.querySelector('#mainTitle');
let selectTitle = false;
leH1.addEventListener('click',()=>{
    leH1.innerText = selectTitle ? '-- 🥳 --':'D.O.M Events';
    selectTitle = !selectTitle;
});

// Un !nom_de_variable = l'inverse de cette variable
// Un point d'exclamation suivi du nom d'une variable = l'inverse de cette variable

//? Mode fonction anonyme classique
// leH1.addEventListener('click',function(){
//     leH1.innerText = 'LOL MDR';
// });
//? la fonction est en dehors
// function maModifTitre(){
//     leH1.innerText = 'LOL MDR';
// }
//? On apelle la fonction quand click
// leH1.addEventListener('click',maModifTitre());

console.log('---------------------------') 

// Changer les evenements en fonction de clicks
let lesLiens = document.getElementsByTagName('a');
let allLinks = document.querySelectorAll('.link-info');
console.log(allLinks);
console.log(allLinks[0]);

allLinks[0].addEventListener('click', ()=>{
    firstTitle.classList.add("macouleur");
}
)

allLinks[1].addEventListener('click', ()=>{
    firstTitle.classList.remove("macouleur");
}
)

allLinks[2].addEventListener('click', ()=>{
    firstTitle.classList.toggle("macouleur");
}
)


console.log("-----------------------------")


const leTitre = document.querySelector("h1");
const les_Liens = document.querySelectorAll("a");
les_Liens[0].addEventListener("click", function(){
    leTitre.classList.add("laClasse");
    document.body.classList.add("bodyBg");
});    
les_Liens[1].addEventListener("click", function(){
    leTitre.classList.remove("laClasse");
});
les_Liens[2].addEventListener("click", function(){
    leTitre.classList.toggle("laClasse");
});





