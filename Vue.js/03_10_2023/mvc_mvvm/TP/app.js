Vue.createApp({
    data() {
        return {
            leNombre:0,
            leString:'ESSAIE ENCORE !',
            
        };
    },

    
    methods: {
        increment5() {
            this.leNombre += 5;
    },

    increment1() {
        this.leNombre++;
    }
    },

    watch:{
        leNombre(value) {
        if(value == 7){
            return 'Tu as gagné le nombre mystère!'
        }else if(value<7){
            this.leString 
        }else if(value>7){
            return 'Tu as dépassé le nbre mystère!'
        }
    
                        }
            }
}).mount('#TP_Réactivité');