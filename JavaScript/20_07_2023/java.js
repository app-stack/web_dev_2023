console.log("Bienvenue sur Javascript");

////! Selectionner des éléments 

// document.body.innerHTML = ''
//? Une fonction type getElement pour récupérer UN élément par son ID 
let specialP = document.getElementById('special');
console.log(specialP);

//? Une fonction type getElement pour récupérer tous les élément selon une certaine balise dans une HTMLCollection
let tousLesP = document.getElementsByTagName('p');
console.log('La HTMLCollection',tousLesP);
//? Quand on a une HTMLCollection on peut accèder à un certain élément 
console.log('le 3e <p> dans la HTMLCollection : ',tousLesP[2]);

//? Une fonction type getElement pour récupérer tous les élément selon une certaine class dans une HTMLCollection
let tousLesSuper = document.getElementsByClassName('super');
console.log(tousLesSuper);
console.log(tousLesSuper[1]);

let tousLesSuperMaisLePremmierEnFait = document.getElementsByClassName('super')[0];
console.log('tousLesSuperMaisLePremmierEnFait',tousLesSuperMaisLePremmierEnFait);


//
//? Une fonction type querySelector pour récupérer UN élément (le 1er trouvé)
let lePremierP = document.querySelector('p');
console.log('lePremierP via querySelector : ',lePremierP);

//? Une fonction type querySelector pour récupérer UN élément par son ID
let pSpecial = document.querySelector('#special');
console.log('pSpecial querySelector + ID',pSpecial);

//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par sa classe
let pSuper = document.querySelector('.super');
console.log('pSuper querySelector + class',pSpecial);

//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
let alloParagraphes = document.querySelectorAll('p');
console.log('allParagraphes querySelector + balise',alloParagraphes);
console.log('allParagraphes mais on prend le 2e',alloParagraphes[1]);

//! Placer des elements dans une page web
//? Une fonction type querySelector pour récupérer UN (le 1er trouvé) élément par la NodeList
let allParagraphes = document.querySelectorAll('p');
let laDiv = document.querySelector('.vide');
let premierH1 = document.querySelector('h1');
//! insertBefore, on selectionne 2 éléments pour placer l'un avant l'autre
document.body.insertBefore(allParagraphes[9],premierH1);

laDiv.append(`Là c'est JS qui ajoute du texte dans la div`);
// Append plutot pensé pour ajouter du contenu à la volé au format string
// si on a crée ou séléctionné un élément que l'on veut placer : ceci peut marcher
// laDiv.append(allParagraphes[4]);
// Mais on a aussi la fonction appendChild;
// laDiv.appendChild(allParagraphes[0]);

// //! On peut aussi supprimer un élément du DOM
document.body.removeChild(allParagraphes[9]);

//! Créer des elements de texte
const newTxt = document.createTextNode('DU texte Youhouuuuu');
document.body.append(newTxt); //Créer c'est bien mais il faut placer

// !Créer n'importe quel element HTML
const newH1 = document.createElement('h1');
newH1.innerText = "AZERTY"; // Phase 2 remplissage
document.body.append(newH1); // Phase 3 On place dans la page les éléments

const userData = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    age: 25,
    dob: '08/02/1989',
    active: true
};

let userDiv = document.getElementsByClassName('user')[0];
userDiv.style.backgroundColor = "chartreuse";
userDiv.style.width = "100%" ;
userDiv.style.margin = "auto" ;
userDiv.style.color = "white" ;
userDiv.style.padding = "2rem" ;


let userNameTemplate = document.createElement('h1');
userNameTemplate.innerText = userData.name ;
//userNameTemplate.innerText = userData["name"] ;
userDiv.append(userNameTemplate);

let userNameTemplate_email = document.createElement('h2');
userNameTemplate_email.innerText = userData.email ;
userDiv.append(userNameTemplate_email);

let userNameTemplate_age = document.createElement('h2');
userNameTemplate_age.innerText = userData.age ;
userDiv.append(userNameTemplate_age);

let userNameTemplate_dob = document.createElement('h2');
userNameTemplate_dob.innerText = userData.dob ;
userDiv.append(userNameTemplate_dob);

let userNameTemplate_active = document.createElement('h2');
userNameTemplate_active.innerText = userData.active ;
userDiv.append(userNameTemplate_active);

// //const userData = {
//     name: 'John delavega',
//     email: 'john.doe@example.com',
//     age: 25,
//     dob: '08/02/1989',
//     active: true,
//     img:'https://www.boredpanda.com/blog/wp-content/uploads/2022/06/funny-low-cost-cosplay-pics-62a744d39c80a__700.jpg'
//   };

//   // JS qui va customiser la div du profile utilisateur
//   let divUser = document.querySelector('.userProfile');
//   divUser.style.backgroundColor = `background-color: #4158D0`;
//   divUser.style.backgroundImage = `linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)`;
//   divUser.style.color = `white`;
//   divUser.style.width = '500px';
//   divUser.style.margin = 'auto';
//   divUser.style.padding = '2rem';

//   //JS crée une image, renseigne la src , modif taille
//   const imgTemplate = document.createElement('img');
//   imgTemplate.src = userData.img;
//   imgTemplate.style.height = '500px';
//   imgTemplate.style.width = '500px';
//   divUser.append(imgTemplate);

//   // JS crée le titre du name
//   const nameTemplate = document.createElement('h1');//phase 1 creation
//   nameTemplate.innerText = userData['name'];
//   divUser.append(nameTemplate);

//   // JS crée le titre du email
//   const emailTemplate = document.createElement('h2');//phase 1 creation
//   emailTemplate.innerText = userData.email;
//   divUser.append(emailTemplate);

//   // JS crée le titre du age
//   const ageTemplate = document.createElement('h2');//phase 1 creation
//   ageTemplate.innerText = userData.age;
//   divUser.append(ageTemplate);

//   // JS crée le titre du dob
//   const dobTemplate = document.createElement('h2');//phase 1 creation
//   dobTemplate.innerText = userData.dob;
//   divUser.append(dobTemplate);

//   // JS crée le titre du active
//   const activeTemplate = document.createElement('h2');//phase 1 creation
//   activeTemplate.innerText = userData.active;
//   divUser.append(activeTemplate);

function ajouterTexte(pseudo,duTexte){
    
    const phraseUser = document.createElement("p");
    phraseUser.innerHTML = `===== <B> ${pseudo}</B> ${duTexte} ====`;
    document.body.append(phraseUser);
} 

ajouterTexte('JOsé','Gracia');
ajouterTexte('Grigny','La grande Borne');
ajouterTexte('Roi','Heenok');
ajouterTexte('Dongue','Rodrigue');

// //! EXO 20.1 
// //TODO: Créer une ƒ° ajouterTexte qui prend 2 params : pseudo et duTexte
// //TODO: La fonction a pour but :
// //TODO: de créer puis remplir et enfin placer un paragraphe contenant pseudo et duTexte, dans la page
// // TODO (Bonus) : Dans le paragraphe le pseudo est affiché en gras

// ajouterTexte('JOsé','Gracia');
// ajouterTexte('Grigny','La grande Borne');
// ajouterTexte('Roi','Heenok');
// ajouterTexte('Dongue','Rodrigue');

// function ajouterTexte(unPseudo, duTexte){
//     const nouveauTexte = document.createElement('p');
//     nouveauTexte.innerHTML = `<strong>${unPseudo}</strong> - ${duTexte}`;
//     document.body.append(nouveauTexte); 

/**
 * **************************************
 * 14- Les Classes
 * **************************************
 */
class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(nameUser, mailUser, phoneUser) {
        this.nameUser = nameUser;
        this.mailUser = mailUser;
        this.phoneUser = phoneUser;
    }
    getProfileInfo() {
        console.log('this ',this);
        return `infos de l'utilisateur : 
                son nom : ${this.nameUser}
                son mail : ${this.mailUser}
                son Tél : ${this.phoneUser}`;
    }
}
    
    const exampleUser1 = new UserProfile("José", "jose@gmail.com", "09876543");
    const exampleUser2 = new UserProfile("Sarah", "sarah@gmail.com", "063736252");
    exampleUser2.getProfileInfo(); 
    console.log('this ', exampleUser1);
