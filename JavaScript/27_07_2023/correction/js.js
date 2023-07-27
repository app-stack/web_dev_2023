console.log('Bienvenue dans Javascript');

// ** mini éditeur de texte - addEventListener - keyup - innerHTML
// TODO 1: récupérer le textarea dans une variable monTxt
// TODO 2: récupérer la div (celle avec l'id formrender ?) dans une variable rendu
// TODO 3-1: sur monTxt on place un addEventListener qui surveille le clavier et qui exécute une fonction
// TODO 3-2: Dans cette fonction, au innerHTML de rendu on assigne la VALEUR contenue dans monTxt

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


