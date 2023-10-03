const app = Vue.createApp({
    data() {
        return { leInput: '', leInputConfirm: '' };
    },
    methods: {
        afficherAlerte() {
            alert('ALERTE GENERALE');
        },
        afficherInput(event) {
            console.log(event);
            this.leInput = event.target.value;
        },
        afficherInputConfirm(event) {
            this.leInputConfirm = event.target.value;
        },
    },
    });
    
    app.mount('#monApp');