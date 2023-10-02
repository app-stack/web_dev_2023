Vue.createApp({
    data(){
        return {
            leNombre : 0
        };        
    },
    methods: {
        augmenter(){
            this.leNombre ++;
        },
        reduire(){
            this.leNombre --;
        }
    }
}).mount('#monApp');