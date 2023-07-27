console.log('-------------------------------------');

// TODO 1: récupérer le titre h2 dans une variable apiDiv
// TODO 2-1: créer une variable contactAPI à laquelle on assigne une fonction fléchée
// TODO 2-2: dans la F =>, créer une variable data à laquelle on assigne la fonction fetch()
// TODO 2-3: fetch(), prend en param l'Url de l'API
// TODO 2-4: Faire un console.log de data
// TODO 3-1: Tjrs dans la F =>,créer une variable dataTransformed à laquelle on assigne data
// TODO 3-2: sur la variable data on utilise la fonction .json()
// TODO 3-3: Faire un console log de dataTransformed
// TODO 4-1: Tjrs dans la F =>,au InnerHTML de apiDiv, assigner la value dans dataTransformed
// TODO 5: on éxecute notre fonction contactAPI quelquepart dans notre programme

let apiDiv = document.querySelector("#apiContact");
console.log(apiDiv);

// let contactAPI = //asyn pour que ça fonctionne mieux 
// async () => {
//     //await pour que ça fonctionne mieux 
//     let data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(data);
//     //await pour que ça fonctionne mieux
//     let dataTransformed = await data.json();
//     console.log(dataTransformed);
//     apiDiv.innerHTML = dataTransformed.latitude;
// } 

// contactAPI();

console.log('--------------------------------------');

// const api_Div = document.querySelector('#apiContact');
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contactApi =  () => {
//     //Data va récup Toutes les données de l'api
//     const data =  fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(data);
//     //Plutot que de Travailler sur la réponse, on va la transformé pour 
//     //qu'elle deviennt un OBJET JS (+ pratique)
//     const dataTransformed =  data.json();
//     console.log(dataTransformed);
//     api_Div.innerText = dataTransformed.latitude;
// };
// contactApi();

console.log('FETCH FONCTIONNE');

// const apiD_iv = document.querySelector('#apiContact');
// //de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
// const contact_Api =  async () => {
//     //Data va récup Toutes les données de l'api
//     const data = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
//     console.log(data);
//     //Plutot que de Travailler sur la réponse, on va la transformé pour 
//     //qu'elle deviennt un OBJET JS (+ pratique)
//     const dataTransformed = await  data.json();
//     console.log(dataTransformed);
//     apiD_iv.innerText = dataTransformed.latitude;
// };
// contact_Api();


console.log('POKEMON');

let pokemon = document.querySelector("#apiContact");
console.log(pokemon);

let contact_pokemeon = //asyn pour que ça fonctionne mieux 
async () => {
    //await pour que ça fonctionne mieux 
    let data = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log(data);
    //await pour que ça fonctionne mieux
    let dataTransformed = await data.json();
    console.log(dataTransformed);
    pokemon.innerHTML = dataTransformed.results[0].name;
} 

contact_pokemeon();

const pokemonListe = document.getElementById('pokeListe');
console.log(pokemonListe);
// de base une ƒ° => est anonyme, astuce pour désanonymiser, on la stocke dans une variable
const pokemonApiContact = async () => {
    //Data va récup Toutes les données de l'api
    const pokemonData = await fetch('https://pokeapi.co/api/v2/pokemon');
    console.log('pokemonData',pokemonData);
    //Plutot que de Travailler sur la réponse, on va la transformé pour 
    //qu'elle deviennt un OBJET JS (+ pratique)
    const pokemonDataTransformed = await pokemonData.json();
    console.log('pokemonDataTransformed',pokemonDataTransformed);
    console.log(pokemonDataTransformed.results[0].name);
    // Boucle pour parcourir le tableau results dans la réponse
    for(let i=0;i<pokemonDataTransformed.results.length;i++){
        let listElement = document.createElement('p');
        listElement.innerText = pokemonDataTransformed.results[i].name;
        pokemonListe.append(listElement);
    }
    const pokemonName = document.createElement('h1');
    pokemonName.innerText = pokemonDataTransformed.results[0].name;
    document.body.append(pokemonName);
};
pokemonApiContact();