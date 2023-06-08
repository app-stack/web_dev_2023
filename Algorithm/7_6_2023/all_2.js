// Exercice all2_1 :	écrire une fonction qui retourne **la position** du plus grand élément d'un tableau.

function getPosition (tab){
    let max = tab[0];
    let maxPos = 0 ;
    for(let i=0 ; i<tab.length ; i++){
        if (tab[i] > max){
            max = tab[i];
            maxPos = i;
        }
    }
        return maxPos;
}
// Exemple : position_biggest([4,7,5,5,6]) retourne 1 car le plus grand est dans la case numéro 1
console.log(getPosition ([4, 7, 5, 5, 6]));
console.log(getPosition ([4, 7, 50, 100, 6]));

// Exercice all2_2 : écrire une fonction qui fait la somme de tous les éléments d'un tableau.
tab2 = [0, 1, 2, 3];


// tab2 = [0, 1, 2, 3];
// let sum  = tab2[0] + tab2[1] + tab2[2] + tab2[3];
function sumTableau (tab) {
    let sum  = 0;
    for (let i=0 ; i< tab.length ; i++){
        sum = sum + tab[i];
    }
    return sum ;
}
console.log(sumTableau([5, 7, 10]));

// console.log(tab[1,3,7]);


// Exercice all2_3 : écrire une fonction qui retourne la somme des valeurs positives d'une liste.
function sumPositivNum (tab) {
    let sum = 0 ;
    for (let i=0 ; i< tab.length ; i++){
        if (tab[i]>0){
            sum = sum + tab[i];
        }
    }
    return sum ;
}
console.log(sumPositivNum);
// Exercice all2_4 : En utilisant les deux fonctions précédentes, 
// écrire une fonction qui retourne la somme des valeurs négatives d'une liste.
function sumNegativNum (tab) {
    sumTableau - sumPositivNum ;
    return sumNegativNum ;
}

console.log(sumNegativNum);
