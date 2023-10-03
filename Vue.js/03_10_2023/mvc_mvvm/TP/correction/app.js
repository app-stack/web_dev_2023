Vue.createApp({
    data() {
        return {
        leNombre: 0,
        msg:''
        };
    },
    computed: {
        indice() {
        if (this.leNombre < 7) {
            return 'ESSAIE ENCORE!';
        } else if (this.leNombre === 7) {
            return this.leNombre + '...BINGO';
        } else {
            return 'tu as dépassé le nombre';
        }
        },
    },
    methods: {
        augmenter(num) {
        this.leNombre += num;
        },
    },
    watch: {
    
        leNombre(value) {
            console.log('le watcher en action...');
            if(value>30){
                // this.leNombre = 0;
                this.msg= "BCP BCP mais alors bcp TROP"
                setTimeout(() => {
                    this.leNombre = 0;
                }, 3000);
            }
    
        },
    },
    }).mount('#monApp');