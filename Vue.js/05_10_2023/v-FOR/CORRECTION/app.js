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
        supprimerFilm(unIndex) {
        this.mesFilms.splice(unIndex, 1);
        },
    },
    });
    app.mount('#monApp');