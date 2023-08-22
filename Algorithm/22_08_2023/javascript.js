console.log("Bienvenue sur Javascript");



// const aleatoire = Math.floor(Math.random() * 100 + 1);
//On rajoute +1 car on veut un nbre entre 1 et 100

// let devinez = 0


// for (let i = 0; i < 10; i++) {

// }

// boucle while est plus adaptée 

const nbrATrouve = numberRandom();
let numTour = 0;
let tentative = 0;
let reussite = false;
trouverLeNbr();
function trouverLeNbr(){
    while(!reussite && numTour<10){
        tentative = parseInt(prompt('Choisir un nombre'));
        numTour++;
        if(tentative==nbrATrouve){
            reussite = true;
        }
        else if(tentative>nbrATrouve){
            alert('Le nombre est trop grand');
        }
        else{
            alert('Le nombre est trop petit');
        }
    }
    if(reussite){
        if(numTour==1){
            alert('Le nombre est : '+tentative+' réussi en un seul essai');
        }
        else{
            alert('Le nombre est : '+tentative+' réussi en : '+numTour+' essais');
        }
    }
    else{
        alert('Perdu il faut changer de métier');
    }
}
function numberRandom(){
    return Math.floor(Math.random() * 100 + 1);
}