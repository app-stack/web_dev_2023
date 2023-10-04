const app = Vue.createApp({
    data() {
        return {
        nomClasse: '',
        laCouleur: '',
        visible: true,
        };
    },
    computed: {
        //Version optimisé en passant par une fonction
        //Computed pour pas avoir d'interférences avec la ƒ° toggle affichage
        classDynamique() {
        //! Verision opti ?  
        // return{
        //   maClasseHello: this.nomClasse ==='hello',
        //   maClasseWorld: this.nomClasse ==='world',
        //   maClasseHidden: !this.visible,
        //   maClasseVisible: this.visible
        // }
        //!Version classique avec des if 
        if (this.nomClasse === 'hello') {
            return 'maClasseHello';
        }
        if (this.nomClasse === 'world') {
            return 'maClasseWorld';
        }
        if (this.visible) {
            return 'maClasseVisible';
        }
        if (!this.visible) {
            return 'maClasseHidden';
        }
        },
    },
    methods: {
        affichage() {
        this.visible = !this.visible;
        },
    },
    });
    app.mount('#monApp');