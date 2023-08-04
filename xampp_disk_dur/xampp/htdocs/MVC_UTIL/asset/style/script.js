
const nom = document.querySelector('#nom')
const prenom = document.querySelector('#prenom')
const mail = document.querySelector('#mail')
const mdp = document.querySelector('#mdp')

function remplirChamp(getnom,getprenom,getmail,getmdp) {
    nom.value = getnom;
    prenom.value = getprenom;
    mail.value = getmail;
    mdp.value = getmdp;
}
