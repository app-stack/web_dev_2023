const app = Vue.createApp({
    data() {
        return {
        monString: '',
        mesFilms: [],
        mesFilmsPush: ['SpiderMan', 'Batman', 'IronMan']
        };
    },

    methods: {
        affichage() {
        return this.mesFilms ;
        },

        longueur() {
        console.log(this.mesFilms.length) ;
        },

        ajouter() {
        this.mesFilms.push(this.monString) ;
        },
    },
    });
    app.mount('#monApp');