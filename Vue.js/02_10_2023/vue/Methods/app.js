//Création d'une instance Vue c'est notre application
Vue.createApp({
    //Dans une fonction data on va retourner un objet qui contiendra les variables de l'application
    data() {
        return {
        
        }
    },
    methods: {
        afficherLivreRandom() {
            let random = Math.random();
            if(random>0.5){
                return "Le livre de la jungle"
            }else{
                return"Le livre de Boba fêt"
            }
        },
    },
    // L'application est montée sur la balise HTML qui possède l'id methodsFunctionApp
}).mount('#methodsFunctionApp');