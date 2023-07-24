console.log('Bienvenue dans Javascript');

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



//24_07_2023

class Imc {
    constructor(name_user, weight_user, size_user) {
        this.name_user = name_user;
        this.weight_user = weight_user;
        this.size_user = size_user;
        this.resume = this.calcul_Imc();
    }
    
    calcul_Imc() {
                // weight / size ** 2;
                return (this.weight_user / this.size_user ** 2).toFixed(2);
    }

    display () {
        console.log(`New_User : 
        his name : ${this.name_user}
        his weight  : ${this.weight_user}
        his size : ${this.size_user}
        has got an Imc of : ${this.resume}`);
    } 
}

//* progr principal -> injection des données
let list_Imc = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];
//*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase

let new_User_dingo = new Imc("Dingo", 99, 1.55);
list_Imc.forEach((unNewImc) => unNewImc.display());
console.log(new_User_dingo.display());


//**** */


class class_Imc {
    //* Constructor -> initialise les données
    constructor(nom, poids, taille) {
      this._nom = nom; //! 3 attributes en In mode
        this._poids = poids;
        this._taille = taille;
        this._imc = this.calculImc(); //! attribute en OUT mode (à calculer)
    }
    //* Le calcul
    calculImc() {
      //* Format simple (2 nombres après le . ou la ,)
      // return this._poids/(this._taille*this._taille);
      //  return (this._poids/Math.pow(this._taille, 2)).toFixed(2);
      return (this._poids / this._taille ** 2).toFixed(2);
    }
    //* Affichage
    display() {
        console.log(
            this._nom +
            " (" +
            this._poids +
            " kg, " +
            this._taille +
            " M) a un IMC de: " +
            this._imc
        );
    }
}

  // //* progr principal -> injection des données
let list = [
    new Imc("Sébastien Chabal", 135, 1.7),
    new Imc("Escaladeuse", 45, 1.68),
    new Imc("JOJO ", 300, 2),
    new Imc("Gontrand ", 90, 1.75),
    new Imc("Colonel Clock ", 200, 1.75),
    new Imc("JOsiane de la Vega", 99, 1.55),
];
  //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
list.forEach((uneCase) => uneCase.display());


// Javascript Modifier éléments html 

console.log ('Javascript Modifier éléments html')
console.log ('---------------------------------')

let firstLink = document.querySelector('a');
console.log(firstLink);
let allLinks = document.querySelectorAll('a');
console.log(allLinks);

let firstTitle = document.querySelector('h1');
console.log(firstTitle);

let firstImg = document.querySelector('img');
console.log(firstImg);

firstTitle.className = 'laClasse';
firstLink.href = 'https://www.google.com'
firstImg.src = 'https://picsum.photos/200/300'

// Javascript Modifier éléments html 

console.log ('Javascript Modifier éléments html')
console.log ('---------------------------------')

firstTitle.setAttribute('class', 'laClasse');
firstLink.setAttribute('href', 'https://www.google.com');
firstImg.setAttribute('src', 'https://picsum.photos/200/300');

// Javascript Modifier éléments html 

console.log ('Javascript clik suivi d1 evenement')

// exemple on clique sur une image et ca fait des log en console 

firstImg.addEventListener('click',()=>{
    console.log('CA CLICK A DONF');
});