Vue.createApp({
    data() {
        return {
            selectCard1 : false,
            selectCard2 : false
        } 
    },
    
    methods: {
        selectionCard(uneCard) {
            if(uneCard == 1){
                this.selectCard1 = true;
            }  
            if(uneCard == 2){
                this.selectCard2 = true;
            } 
        },
    },

    }).mount('#monApp');