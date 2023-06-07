function setup() {
    createCanvas(600, 400);
    fill(255, 0, 0);
    let xBall = 100;
  }
  
  let xBall = 200;
  
  function draw() {
    background(0, 0, 255);
    circle(xBall ,200, 50);
    //xBall++;
    xBall = (xBall + 3)%600;
  }