const app = Vue.createApp({
    data() {
        return {
        nameUser: 'Raymond',
        userName: 'GADJI',
        };
    },
    methods: {
        afficherNameUser(event) {
        this.nameUser = event.target.value;
        },
    },
    });
    
    app.mount('#monApp');