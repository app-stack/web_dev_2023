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
        },
        capterInput(event){
            console.log(event);
            this.uneString = event.target.value;
        }
    }
}).mount('#monApp');