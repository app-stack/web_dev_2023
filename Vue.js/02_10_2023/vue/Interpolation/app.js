//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    data() {
        return {
        unLivre: 'Les mémoires de Steven Seagal',
        unTableau: ['du texte', 99],
        unNombre: 1234567890,
        unObjet: {
            name: 'COOL',
            tel: '060503030'
        },
        };
    },
    // L'application est montée sur la balise HTML qui possède l'id bookListApp
  }).mount('#bookListApp');