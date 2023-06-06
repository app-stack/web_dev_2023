// Écrire une fonction f1 qui ne prend rien en entrée, et qui affiche 17 dans la console.
function f1() {
    console.log(17);
}


// Utiliser la fonction f1 pour afficher 17 dans la console.
f1();

// Écrire une fonction f2 qui ne prend rien en entrée, et qui retourne 18.
function f2() {
    return 18;
}

// Utiliser la fonction f2 pour afficher 18 dans la console.
console.log(f2()); //Ecrire le résultat de l'appel f2
console.log(1+6); //Ecrire le résultat de 1+6
console.log(3);

// La fonction f2 a l'air moins pratique à utiliser. Quel intérêt pourrait-elle avoir par rapport à f1 ?
//La fonction f1 est specialisée pour afficher dans la console, 
//si c'est ce que l'on veut faire, elle est plus pratique que f2
//En revanche la fonction f2 permet plus de liberté, l'on peut faire ce que l'on veut du resultat
//(le mettre dans une variable, l'écrire dans la console, l'afficher dans un titre dans l'html ...)

// Écrire une fonction f3 qui prend un nombre en entrée et qui affiche dans la console le double de ce nombre.
function f3(n){
    console.log(2*n);
}

// Utiliser la fonction f3 pour écrire dans la console le double de 99.
f3(99);

// Écrire une fonction f4 qui prend un nombre en entrée et qui retourne le double de ce nombre.
function f4(m){
    return 2*m;
}

// Utiliser la fonction f4 pour écrire dans la console le double de 99.
console.log(f4(99));

// Utiliser la fonction f4 pour stocker dans une variable appelée a le double de 99.
let a=f4(99);
console.log("La variable a contient", a);


// Écrire une fonction f5 qui prend en entrée deux nombres et qui affiche dans la console la somme de ces deux nombres.
function f5(b, c){
    console.log(b+c);
}
// Utiliser la fonction f5 pour écrire dans la console la somme de 42 et 77.
f5(42, 77);

// Écrire une fonction f6 qui prend en entrée deux nombres et qui retourne la somme de ces deux nombres.
function f6(d, e){
    return d + e; 
}

// Utiliser la fonction f6 pour écrire dans la console la somme de 42 et 77.
console.log("Le résultat de f6 est", f6(42, 77));

// Utiliser la fonction f6 pour incrémenter la variable a de la somme de 42 et 77.
a = a + 5;
a = a + f6(42, 77) ; 
console.log("La nouvelle variable de a est", a);

//Incrémenter la variable a de 10 et 15
a = a + f6(10, 15);
console.log("La nouvelle variable a est de", a);

//La variable de a = f6(a, f6(10, 15))
a = f6(a, f6(10, 15));
console.log("La nouvelle variable a est de", a);

// Écrire une fonction f7 qui prend deux nombres en entrée et qui retourne le plus grand des deux.
function f7(f, g){
    if(f>g){
        return f;
    }
    else {
        return g;
    }
}
console.log("Le plus grand entre 10 et 20 est", f7(10, 20));
console.log("Le plus grand entre 100 et 200 est", f7(100, 200));
// Écrire une fonction f8 qui prend trois nombres en entrée et qui retourne le plus grand des trois.
// (Au moins deux versions possibles : sans utiliser f7, et en utilisant f7).
function f8Ter(n1, n2, n3){
    let max_1_2 = f7(n1, n2);
    return f7(max_1_2, n3);
}



function f8(n1, n2, n3){
    if(n1>n2){
        if(n1>n3){
            return n1; 
        } else {
            return n3;
        }
    }
    else {
        if (n2 > n3){
            return n2;
        } else {
            return n3;
        }
    }
    
}

function f8Bis(n1, n2, n3){
    if (n1 >= n2 && n1 >= n3) {
        return n1;
    } else if (n2 >= n3) {
           return n2;
    } else {
        return n3;
    }
} 

function f8Quater(n1, n2, n3) {
    return f7(  f7(n1, n2)  ,  n3  );
}


console.log("Le résultat de f8_10_12_15 est de", f8(10,12,15));
console.log("Le résultat de f8_100_120_150 est de", f8(100,120,150));

console.log("Le résultat de f8Bis_10_12_15 est de", f8Bis(10,12,15));
console.log("Le résultat de f8Bis_100_120_150 est de", f8Bis(100,120,150));

console.log("Le résultat de f8Ter_110_122_155 est de", f8Ter(110,122,155));
console.log("Le résultat de f8Ter_100_120_150 est de", f8Ter(100,120,150));

// Écrire une fonction f9 qui prend un nombre et un mot en entrée, et qui affiche dans la console ce mot ce nombre de fois.
function f9(number, word){
    for(let i=0 ; i<number ; i++){
        console.log(word);
    }
}
f9(14, "geilly");
f9(2, "solley");