console.log('Bienvenue dans Javascript');


document.addEventListener('click', (event)=>  {
    console.log("La position x est :", (event.x));
    console.log("La position y est :", (event.y));
    let img = document.createElement("img");
    img.style.position = "absolute"; 
    img.style.top = event.x+"px";
    img.style.left = event.y+"px";
    img.src = "https://picsum.photos/id/1/200/300";
    document.body.append(img);
})

//
console.log("-----------------------------------");

// !EXO 24.5 
// ** addEventListener - capter un évènement "click" - coord x - coord y
// TODO 1: sur document, placer un addEventListener qui écoute le "click" et éxecute une fonction qui a unEvent en paramètre
// TODO 2: Dans cette fonction on console log unEvent 
// TODO 3: à partir du console log retrouver les propriétés de unEvent qui correspondent au coordonnées du click
// TODO 4: Connaissez-vous des propriétés CSS dans lesquelles on peut se servir des coord du click pour le placer au bon endroit ? 
document.addEventListener('click', function(eventClick){
    console.log(eventClick);
    console.log('Les coord : ',eventClick.x, eventClick.y);
    // On Créer une image
    const monImg = document.createElement('img');
    const tailleImg = 150;
    // On rajoute une src à l'image
    monImg.setAttribute('src', `https://picsum.photos/${tailleImg}/${tailleImg}`);
    // On modifie le type de position de l'image
    monImg.style.position = 'absolute';
    // On modifie la position top de l'image
    monImg.style.top = eventClick.y - tailleImg /2 +'px';
    // On modifie la position left de l'image
    monImg.style.left = eventClick.x -tailleImg /2 +'px';
    //On place l'image fraichement créee dans le body de la page
    document.body.append(monImg);
});