const app = Vue.createApp({
    data() {
        return {
        monString: '',
        mesFilms: [],
        mesFilmsListe: ''
        };
    },

    methods: {

        ajouter() {
        this.mesFilms.push(this.monString) ;
        },

        supprimer(index){
            this.mesFilms.splice(index, 1);
        }

    },
    });
    app.mount('#monApp');