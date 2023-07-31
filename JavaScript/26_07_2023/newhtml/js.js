console.log("Bienvenue dans Javascript");

//! EXO SetInterval 
// ** Executer 1 script ttes les X sec - addEventListener - click - innerHTML
// TODO 1: récupérer le titre h3 dans une variable monTitre
// TODO 2: créer une variable timer initialisée à 3
// TODO 3-1: sur monTitre on place un addEventListener qui surveille le click et qui exécute une fonction
// TODO 3-2: Dans cette fonction, créer une variable countDown à laquelle on assigne la fonction setInterval()
// TODO 3-3: setInterval() prend en 1er param, une fonction et en 2e param 1000 ms
// TODO 4-1: Dans la fonction de setInterval(), SI timer est supperieur à 0, on assigne au innerHTML de monTitre, timer
// TODO 4-1: SINON, on assigne au innerHTML de monTitre, "GO GO GO", ensuite on utilise clearInterval pour stopper l'intervale
// TODO 5: Après ces conditions, on décrémente timer

let SuperTitre = document.querySelector("#abc");
console.log(SuperTitre);

let Timer = 3;
SuperTitre.style.textAlign = "center";
SuperTitre.addEventListener("click", function () {
    countDown = setInterval(function() {
        
        if (Timer > 0) {
            SuperTitre.innerHTML = Timer;
        }else{
            SuperTitre.innerHTML = "GO, GO, GO";
                clearInterval(countDown);
        }
        Timer--;
        SuperTitre.style.backgroundColor = "chartreuse";
        
    }, 1000);
})

console.log("----------------------------");

const oneTitle = document.querySelector("h2");
let timer = 3;
oneTitle.addEventListener("click", function(){
    const countDown = setInterval(function() {
        if(timer > 0) {
            oneTitle.textContent = timer;
        }
        else{
            oneTitle.textContent = "GO GO GO";
            console.log(timer);
            //Pour ne pas gaspiller des performances pour rien
            // C'est pour ca qu'on a stocker le setInterval dans une variable countDown 
            clearInterval(countDown);
        }
        console.log(timer);
        timer--;
    },1000);
});

console.log('------------------------------');


class Imc {
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


console.log('---------------------------------');

class Employe {
    //* Constructor -> initialise les données
    constructor(nom, prenom, age, salaire) {
        this._nom = nom; //! 3 attributes en In mode
        this._prenom = prenom;
        this._age = age;
        this._salaire = salaire;
        this._cout = this.calcul_Cout(); //! attribute en OUT mode (à calculer)
    }

    getCout(){
        return this._cout;
    } 

    display_Cout(){
        console.log(this._nom+this._prenom+this._age+this._salaire+this._cout);
    };

    calcul_Cout (){
        let month = 12;
        let tax = 0.9;

        return this._salaire  * (month) * 1 + (tax) ;
    }
}



class Pme {
    //* Constructor -> initialise les données
    constructor(nom_entreprise, employes, revenu, frais_fixe, frais_dachats) {
        this._nom_entreprise = nom_entreprise; //! 3 attributes en In mode
        this._employes = employes;
        this._revenu = revenu;
        this._frais_fixe = frais_fixe;
        this._frais_dachats = frais_dachats;
        this._charge_salariale = this.Cout_Total_employes();
      this._bilanCalculated = this.bilanCalculated(); //! attribute en OUT mode (à calculer)
    }

    bilanCalculated(){
        
        let bilan = this._revenu - (this._frais_fixe + this._frais_dachats+ this._charge_salariale);
        return bilan;
    }

    display_bilanCalculated(){
        // let ca_entreprise = 0;
        console.log(`revenu : ${this._revenu} 
        : Cout Initial : ${this._frais_fixe + this._frais_dachats}
        cout equipe : ${this.Cout_Total_employes()}
        bilan : ${this.bilanCalculated()}`);
    }
    


    Cout_Total_employes(){
        let total = 0;

        for(let employe of this._employes){
            total += employe._cout;
        }


        return total;
    }
}

let Adrar = new Pme("adrar",[new Employe("Gadji","Raymond","40",2000), new Employe("Salvan", "Remi", "20", 3000), new Employe("Garcia", "Alexia", "30", 3000)], 300000, 20000, 50000 );

Adrar.display_bilanCalculated();


// me servira à passer le cout d1 employé dans la classe PME

// bilanCalculed () {        
//     let ca_entreprise = 0;
//     console.log(`${this._???} : Cout Initial : ${this._???}`);