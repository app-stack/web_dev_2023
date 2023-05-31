/*
// Série A
// A1
// Initialisation
setPos(300,300);
changeColor(color.red);
setLineWidth(10);

// Réalisation
forward(200);
faceRight();
forward(100);


// A2
// Initialisation
setPos(300,300);
changeColor(color.green);
setLineWidth(10);
faceLeft();

// Réalisation
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);


// A3
// Initialisation
setPos(300,300);
changeColor(color.black);
setLineWidth(10);
faceLeft();

// Réalisation
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);

// A4
// Initialisation
setPos(200,500);
changeColor(color.green);
setLineWidth(10);
faceRight();

//Réalisation
forward(100);
arcLeft(50,180);
faceLeft();
forward(50);
arcRight(50,180);
faceRight();
forward(100);


// Série B
// B1
// Initialisation
setPos(100,100);
setLineWidth(10);
changeColor(color.green);
faceRight();


//Réalisation
for(let i=0 ; i<4 ; i++){
    forward(100);
    faceDown();
    forward(100);
    faceRight();
}


//B2
//Initialisation
setPos(50,300);
setLineWidth(10);
changeColor(color.red);
faceUp();

//Réalisation
for(let i=0 ; i<4 ; i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}


//B3
//Initialisation
setPos(200,200);
setLineWidth(10);
changeColor(color.fuchsia);
faceRight();

//Réalisation
for(let i=0 ; i<4 ; i++){
    forward(100);
    right(90);
}


//B4
//Initialisation
setPos(200,300);
setLineWidth(10);
changeColor(color.blue);
faceRight();

//Réalisation
for(let i=0 ; i<3 ; i++){
    forward(200);
    left(180-60);
}


//Série C
//C1
//Initialisation
setPos(50,200);
setLineWidth(10);
changeColor(color.blue);
faceRight();

//Réalisation
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<4 ; j++){
        forward(100);
        right(180-60);
    }
    left(180-60);
}


//C2
//Initialisation
setPos(200,500)
setLineWidth(10);
changeColor(color.fuchsia);
faceUp();

//Réalisation

for(let i=0 ; i<5 ; i++) {
    for(let j=0 ; j<4 ; j++){
        forward(50);
        right(180-90)
    }
        up();
        forward(100);
        down();
}


//C3
//Initialisation
setPos(25,300);
setLineWidth(10);
changeColor(color.green);
faceRight();

//Réalisation

for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<8 ; j++){
        forward(100);
        left(180-45);
    }
        up();
        forward(200);
        down();
        shiftColor(0.10);
}



//ClignotantRabé
//Initialisation
setPos(300,200);
setLineWidth(200);
shiftColor(0.1);
faceRight();

//Réalisation

for(let i=0 ; i<10 ; i++){
    arcRight(100,360);
    shiftColor(0.5);
}  


//C4
//Initialisation
setPos(50,200);
setLineWidth(10);
faceRight();
changeColor(color.red);

//Réalisation
for(let k=0 ; k<5 ; k++){
    for(let i=0 ; i<3 ; i++){
        forward(50);
        left(180-60);
    }
    changeColor(color.yellow);
    for(let j=0 ; j<4 ; j++){
        forward(50);
        right(180-90);
    }
    up();
    forward(100);
    down();
    changeColor(color.red);
}


//C5
//Initialisation
setPos(300,300);
setLineWidth(10);
faceRight();
shiftColor(1/6);

//Réalisation
for(let j=0 ; j<4 ; j++){
    for(let i=0 ; i<8 ; i++){
        forward(200);
        left(180-45);
    }
    right(180-90);
    shiftColor(0.25);
}
*/ 

//Série D
//D9
//Initialisation
setPos(200,300);
faceRight();
setLineWidth(10);

let length = 100;
for(let i=0 ; i<6 ; i++){
    forward(lentgh);
    right(120);
    length = lentgh + 100 ;
}



















