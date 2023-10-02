Vue.createApp({
    data(){
        return {
            leNombre : 0,
            truc:2,
            uneString:'Hello'
        };        
    },
    methods: {
        augmenter(num){
            this.leNombre += num;
        },
        reduire(num){
            this.leNombre -= num;
        }
    }
}).mount('#monApp');