console.log("Bienvenue sur Javascript");

//Exemple de correction :
const nbr = parseInt(prompt('saisir le nombre de chocolatines à facturer'));
if(nbr<1){
    total = 0;
}
else if(nbr>20){
    total = 27 + ((nbr-20)*1.20);
}
else if(nbr>10){
    total = 14 + ((nbr-10)*1.30);
}
else{
    total = nbr*1.4;
}
/* switch (true){
    case nbr >20:
        total = 27 + ((nbr-20)*1.20);
        break;
    case nbr >10:
        total = 14 + ((nbr-10)*1.30);
        break;
    default: 
        total = nbr*1.4;
        break;
} */
alert('le prix total est de : '+ total.toFixed(2)+ '€');
