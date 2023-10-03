Vue.createApp({
    data(){
        return {
            uneString:'Raymond',
            test:""
        };        
    },
    methods: {
        capterInput(event){
            console.log(event);
            this.uneString = event.target.value;
        },
        capterEsc(event){
            this.test=event.target.value;
        },
        alerte(){
            alert("Bonjour");
        }
        }
    }
).mount('#monApp');