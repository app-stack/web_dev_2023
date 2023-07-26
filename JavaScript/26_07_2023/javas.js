console.log('Bienvenue dans Javascript');

//! EXO 24.4
// TODO 1: récupérer le textarea du formulaire dans une variable txt
// TODO 2: récupérer le button du formulaire dans une variable btn
// TODO 3-1: Sur txt placer un addEventListener qui écoute les touches clavier "keyup" et éxecute une fonction
// TODO 3-2: Dans cette fonction, si ce qu'on tape dans l'input (sa valeur) dépasse 5 caractères alors on désactive le button

let textarea_form = document.getElementById('formMessage');
console.log(textarea_form);

let btn = document.querySelector('#formSubmitBtn');
console.log(btn);

textarea_form.addEventListener("keyup", function(){
    console.log('ok');
    if (textarea_form.value.length > 5) {
        btn.disabled = true;  
    }

    else {
        btn.disabled = false;
    }
})

console.log('--------------------------');

//
const monTextArea = document.querySelector('#formMessage');
const monBtn = document.querySelector('#formSubmitBtn');
console.log(monTextArea);
console.log(monBtn);

monTextArea.addEventListener('keyup',()=>{
    // ? Mode cond ternaires
    monBtn.disabled = monTextArea.value.length>=5 ? true : false;
    // ? Mode IF classique 
    // if(monTextArea.value.length>=5){
    //    monBtn.disabled = true;
    // }
    // else{
    //     monBtn.disabled = false
    // }
});


console.log('--------------------------');


// ** preventDefault - addEventListener - "submit" - form.reset()
// TODO 1: récupérer le formulaire dans une variable monForm
// TODO 2-1: sur monForm on place un addEventListener qui écoute "submit" et qui exécute une fonction qui a event en paramètre (on veut capter l'event)
// TODO 2-2: Dans cette fonction, sur event on utilise la fonction preventDefault()
// TODO 3-2: Puis on console log event
// TODO 3-3 : sur monForm on utilise la fonction .reset()

const monForm = document.querySelector('#myForm'); 
console.log(monForm);

monForm.addEventListener("submit", (event) =>{
        event.preventDefault ();
        console.log(event);
        console.log('ok formulaire envoyé');
        monForm.reset();
    }
)

console.log('----------------------------');

const mon_Form = document.querySelector("form");

mon_Form.addEventListener("submit", function(event){
    event.preventDefault();
    console.log("OK le formulaire a bien été envoyé");
    console.log(event);
    mon_Form.reset();
});

console.log('----------------------------');

// ! Exo SetTimeout
// ** setTimeout() - innerHtml - opacity - backgroundColor
// TODO 1: Dans une variable monTitre, récupérer le titre h2
// TODO 2: on execute le fonction setTimeout() qui prend 2 paramètres: une fonction et un nombre (les miliseconde)
// TODO 3: dans la fonction en param de setTimeout(),modifier dans le style de monTitre l'opacité  que l'on met à 1
// TODO 3-2: modifier dans le style de monTitre le background color  que l'on met à (couleur au choix)
// TODO: 3-3: assigner une chaine de caractères (au choix) au innerHTML de monTitre

let monTitre = document.querySelector('h2') ;
console.log(monTitre);


const myTimeout = setTimeout(function() {
    document.querySelector("h2").style.opacity = "1"; 
    monTitre.style.backgroundColor = "chartreuse" ; 
    document.querySelector("h2").innerHTML = "H2 HAS CHANGED";
    myForm.style.color = "chartreuse";
}, 5000);

function myStopFunction() {
    clearTimeout(myTimeout);
}

setInterval(function() {
    document.body.innerHTML += "Hello"}, 5000);

console.log('-------------------------------');

function myStopFunction() {
    clearInterval(myInterval);
    }

const mon_Titre = document.querySelector("h2");
setTimeout(function() {
    mon_Titre.innerText = "Welcome 2 the DOM";
    mon_Titre.style.color = "white";
    mon_Titre.style.textAlign = 'center';
    mon_Titre.style.opacity = 1;
    document.body.style.backgroundColor = "#4158D0";
    document.body.style.backgroundImage = " linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)";
}, 2000);

