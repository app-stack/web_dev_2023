const app = Vue.createApp({
    data() {
        return {
        nomFilm: '',
        mesFilms: [],
        };
    },
    methods: {
        ajouterFilm() {
        this.mesFilms.push(this.nomFilm);
        },
    },
    });
    app.mount('#monApp');