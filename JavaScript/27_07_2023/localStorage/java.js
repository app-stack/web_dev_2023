console.log('Bienvenue dans Javascript');


const monTxt = document.querySelector("textarea");
const rendu = document.querySelector("#formRender");

monTxt.addEventListener("keyup", function() {
    // rendu.innerHTML =marked(monTxt.value);
    rendu.innerHTML =marked(monTxt.value);
    // Version traduite en marked 
    // rendu.innerHTML = marked(monTxt.value);
    // rendu.innerText = monTxt.value;
    //Dans le innerHtml on lui assigne la Value de ce que 
    //L'utilisateur tape dans le input / textarea
    // rendu.innerHTML = monTxt.value;
});

VANTA.BIRDS({
    el: "#myForm",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00
    })


console.log('---------------------------------------');


// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div dans une variable rendu
// TODO 3: à la valeur contenue dans monTxt on assigne localStorage, sur localStorage on utilise la fonction getItem("monSuperTexte")
// TODO 4-1: ensuite, SI la valeur dans monTxt est définie,
// TODO 4-2: alors on assigne au innerHTML de rendu, localStorage sur lequel on utilise la fonction getItem("monSuperTexte")
// TODO 5-1: (en dehors du IF)Sur monTxt on place un addEventListener qui surveillle le clavier et exécute une fonction
// TODO 5-2: Dans cette fonction, sur localStorage on utilise la fonction setItem
// TODO 5-3: setItem() prend en 1er param "monSuperTexte", et en 2e param la valeur contenue dans monTxt
// TODO 5-4: on assigne au innerHTML de rendu la valeur contenue dans monTxt

console.log(2+2);

console.log(monTxt);

console.log(rendu);

monTxt.value = localStorage.getItem("super texte");
if(monTxt.value !== null){
    rendu.innerHTML = localStorage.getItem("super texte");
}
monTxt.addEventListener('keyup' ,x =>{
    localStorage.setItem("super texte",monTxt.value );
    rendu.innerHTML = monTxt.value;
})


console.log('----------------------------------------');

const mon_Txt = document.querySelector("textarea");
const mon_rendu = document.querySelector("#formRender");
//On va pré remplir le textarea avec ce que l'on récupère dans le localStorage
mon_Txt.value = localStorage.getItem('monSuperTexte');
//Si monTxt.value est définit alors on rempli la Div avec ce qu'on récupère dans le local storage
if(mon_Txt.value){
    mon_rendu.innerText = localStorage.getItem('monSuperTexte');
};
//On détecte ce que tape l'utilisateur dans le textarea
mon_Txt.addEventListener("keyup", function() {
//On enregistre ce que tape l'utilisateur dans le localStorage sous le nom "monSuperTexte"
localStorage.setItem('monSuperTexte',mon_Txt.value);
//On affiche ce que tape l'utilisateur traduit en marked dans la div     
    // rendu.innerHTML =marked(monTxt.value);
    mon_rendu.innerHTML =marked.parse(mon_Txt.value);
});

console.log('----------------------------------------');


try{
    prenom
    alert('Bonjour');  
}catch(err){
    alert(`Erreur Détectée ALERTE STOPPEZ TOUT: 
        -----------
        Le Nom de l'erreur 
        ${err.name}
        -----------
        Le Message de l'erreur  :
        ${err.message}
        ----------
        L'emplacement de l'erreur:
        ${err.stack}`);
}
alert(`Ce message s'affiche correctement`);


console.log('-------------------------------------');


function division(){
    let x = prompt('Entrez un premier nombre (numérateur)');
    let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
    if(isNaN(x) || isNaN(y) || x == '' || y == ''){
        throw new Error('Merci de rentrer deux nombres');
    }else if(y == 0){
        throw new Error('Division par 0 impossible')
    }else{
        alert(x / y);
    }
}

division();


console.log('-------------------------------------');


function division(){
    let x = prompt('Entrez un premier nombre (numérateur)');
    let y = prompt('Entrez un deuxième nombre (dénominateur)');
    
    if(isNaN(x) || isNaN(y) || x == '' || y == ''){
        throw new Error('Merci de rentrer deux nombres');
    }else if(y == 0){
        throw new Error('Division par 0 impossible')
    }else{
        alert(x / y);
    }
}

division();

try{
    division();
}catch(err){
    alert(err.message);
}finally{
    alert(`Ce message s'affichera quoiqu'il arrive`);
}

console.log(1/0);

console.log('------------------------------------');


//! Le nom de la classe commence tjrs par majuscule
class UserProfile {
    //! Pas besoin de déclarer function devant le constructor et méthodes
    constructor(nameUser, mailUser, phoneUser) {
      // Attribut en IN MODE
        this.nameUser = nameUser;
        this.mailUser = mailUser;
        this.phoneUser = phoneUser;
      // Attribut en outMode
        this.contact = phoneUser + mailUser;
        this.resume = this.getProfileInfo();

      // this._nom = nom;  
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

  // Afficher les infos userProfile dans la page web
    function affichagePageWeb(oneUser) {
        const h2element = document.querySelector("h2");
        h2element.innerText = oneUser.getProfileInfo();
    }

    

    class UserAdmin extends UserProfile {
        constructor(unNom, unMail, unPhone, sector, personnalPhone) {
        super(unNom, unMail, unPhone); //! Appel au constructor du parent
        this.sector = sector;
        this.personnalPhone = personnalPhone;
        }
    getAdminInfo() {
        return `infos de l'utilisateur : 
            son nom : ${this.nameUser}
            son secteur d'intervention : ${this.sector}
            son Tél Personnel : ${this.personnalPhone}`;
        }
    }
    
    const exampleAdmin1 = new UserAdmin(
        "Jacky",
        "jack@gmail.com",
        "012345678",
        "administration",
        "0987654323"
    );
    
    console.log(exampleAdmin1.getAdminInfo());




