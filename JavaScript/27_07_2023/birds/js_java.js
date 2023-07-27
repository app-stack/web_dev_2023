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