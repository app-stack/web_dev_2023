Vue.createApp({
    data() {
        return {
        nameUser: 'Dr.Mario',
        ageUser: 45,
        imageUser:'https://s3.amazonaws.com/medium.cosplay.com/77883/2111288.jpg',
        };
    },

    
    methods: {
        augmenterAge() {
        return this.ageUser + 10;
        },

        nombreRandom() {
            return Math.random();
            },
    },
    }).mount('#bookListApp');