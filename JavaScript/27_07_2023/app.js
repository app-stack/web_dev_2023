/**
 * **************************************
 * 14- Les Classes
 * **************************************
 */
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

affichagePageWeb(exampleUser1);

// class UserAdmin extends UserProfile {
//   constructor(unNom, unMail, unPhone, sector, personnalPhone) {
//     super(unNom, unMail, unPhone); //! Appel au constructor du parent
//     this.sector = sector;
//     this.personnalPhone = personnalPhone;
//   }
//   getAdminInfo() {
//     return `infos de l'utilisateur : 
//         son nom : ${this.nameUser}
//         son secteur d'intervention : ${this.sector}
//         son Tél Personnel : ${this.personnalPhone}`;
//   }
// }

// const exampleAdmin1 = new UserAdmin(
//   "Jacky",
//   "jack@gmail.com",
//   "012345678",
//   "administration",
//   "0987654323"
// );

// console.log(exampleAdmin1.getAdminInfo());

// /**
//  * **************************************
//  * Exo : IMC
//  * **************************************
//  */

// class Imc {
//   //* Constructor -> initialise les données
//   constructor(nom, poids, taille) {
//     this._nom = nom; //! 3 attributes en In mode
//     this._poids = poids;
//     this._taille = taille;
//     this._imc = this.calculImc(); //! attribute en OUT mode (à calculer)
//   }
//   //* Le calcul
//   calculImc() {
//     //* Format simple (2 nombres après le . ou la ,)
//     // return this._poids/(this._taille*this._taille);
//     //  return (this._poids/Math.pow(this._taille, 2)).toFixed(2);
//     return (this._poids / this._taille ** 2).toFixed(2);
//   }
//   //* Affichage
//   display() {
//     console.log(
//       this._nom +
//         " (" +
//         this._poids +
//         " kg, " +
//         this._taille +
//         " M) a un IMC de: " +
//         this._imc
//     );
//   }
// }

// // //* progr principal -> injection des données
// let list = [
//   new Imc("Sébastien Chabal", 135, 1.7),
//   new Imc("Escaladeuse", 45, 1.68),
//   new Imc("JOJO ", 300, 2),
//   new Imc("Gontrand ", 90, 1.75),
//   new Imc("Colonel Clock ", 200, 1.75),
//   new Imc("JOsiane de la Vega", 99, 1.55),
// ];
// //*Boucle forEach qui parcourt le tableau avec une variable temporaire uneCase
// list.forEach((uneCase) => uneCase.display());



// /**
//  * **************************************
//  * Exo : PME
//  * **************************************
//  */
console.log('------------------MA PME-----------------');
class Employee {
  constructor(nom, prenom, age, salaireMensuel) {
    this._nom = nom;    
    this._prenom = prenom;
    this._age = age;
    this._salaireMensuel = salaireMensuel;
    this._cout = this.calculCout();// Calcul cout annuel de l'employé :attribut en outMode
  }
// me servira à passer le cout d 1 employé dans la classe PME
  getCout() {
      return this._cout;
  }
//calcul cout total d 1 salarié
  calculCout() {    
    const NB_MOIS_SAL = 12; 
    const LA_TAXE = 0.9;     
    //Un léger calcul
    return this._salaireMensuel * NB_MOIS_SAL * (1 + LA_TAXE);
  }
}

class Pme {
  constructor(nom, equipe, ventes, coutsFixes, achats) {
      this._nom = nom;
      this._equipe = equipe;
      this._cout = coutsFixes + achats;// On peut assigner directement un calcul ici
      this._ventes = ventes;
      this._bilan = 0;    // attribut en OutMode a calculer
  }

  bilanCalculed () {        
    let cumulEquipe = 0;
    console.log(`${this._nom} : Cout Initial : ${this._cout}`);

//Boucle qui parcourt le tableau des salariés (equipe)
//Sur chaque salarié parcouru dans le tableau, on récupère et cumule le cout de ce Salarié
    for (let unSalarie of this._equipe){ 
          cumulEquipe += unSalarie.getCout();
        }

    console.log(`${this._nom} : Cout Total Equipe : ${cumulEquipe}`);
  //Ensuite dans les couts de l'entreprise on cumul le cout de toute l'équipe
    this._cout += cumulEquipe;
    console.log(`${this._nom} : VENTES : ${this._ventes}`);
//Dans les _cout on va avoir les frais fixe + frais achat et 
//on vient de rajouter en + le cout total d'une equipe
//donc le bilan de la pme : les ventes moins tous les couts (frais fixes, achat + cout total de l'equipe à l'année)
    this._bilan = this._ventes - this._cout;
    console.log(`${this._nom} : BILAN : ${this._bilan}`);
  }
}
    

// // Scénario
const pme = new Pme (
  //Le nom entreprise
    "Ma Petite Entreprise - ", 
    //L'equipe de salariés (un tableau)
    [new Employee ("Duval", "Paul", 30, 2000),
    new Employee ("Durand", "Alain", 40, 3000),
    new Employee ("Dois", "Sylvia", 50, 4000),],
     //le revenu , frais fixe, frais d'achat
    300000,
    20000,
    50000);
pme.bilanCalculed();



// /**
//  * **************************************
//  * Exo : BANK
//  * **************************************
//  */
//     class CompteBancaire {
//     constructor(titulaire) {
//         this.titulaire = titulaire;
//         this.solde = 0;
//     }
//     // Ajoute un montant au solde
//     crediter(montant) {
//         this.solde += montant;
//         console.log("Ajout de: " + montant + " pour: " + this.titulaire);
//     }
//     // Retirer un montant au solde
//     retirer(montant) {
//         try {
//         if (this.solde < montant)
//             throw (
//             this.titulaire +
//             ", retrait de: " +
//             montant +
//             " refusé avec solde: " +
//             this.solde
//             );
//         this.solde -= montant;
//         console.log("Retrait de: " + montant + " pour: " + this.titulaire);
//         } catch (err) {
//         console.log("----->" + err);
//         }
//     }
//     virer(montant, membre) {
//         console.log(
//         "Virement de: " +
//             montant +
//             " de: " +
//             this.titulaire +
//             " vers: " +
//             membre.titulaire
//         );
//         membre.crediter(montant);
//         this.retirer(montant);
//     }

//     // Renvoie la description du compte
//     decrire() {
//         return "titulaire: " + this.titulaire + ", solde: " + this.solde;
//     }
//     }

//     // Main, gère 3 comptes bancaires dans un tableau associatif
//     const lesComptes = {
//     Alex: new CompteBancaire("Alex"),
//     Clovis: new CompteBancaire("Clovis"),
//     Marco: new CompteBancaire("Marco"),
//     };

//     // lecture tableau associatif ou Objet["truc"]
//     // Crédite et décrit chaque compte
//     for (let key in lesComptes) lesComptes[key].crediter(1000);

//     // un retrait
//     lesComptes["Alex"].retirer(100);
//     // un petit virement:
//     lesComptes["Marco"].virer(300, lesComptes["Clovis"]);
//     // un petit retrait incorrect
//     lesComptes["Alex"].retirer(1200);
//     // bilan
//     for (let key in lesComptes) console.log(lesComptes[key].decrire());