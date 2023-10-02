Vue.createApp({
    data() {
        return {
            leNombre:0
        };
    },

    
    methods: {
        increment() {
            this.leNombre++;
    },

    decrement() {
        this.leNombre--;
}
},
    }).mount('#EventBinding');