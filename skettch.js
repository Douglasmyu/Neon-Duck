var bY = 0;
var aY = 0;
var dY = 0;
var fY = 0;

var score = 0;
function setup() { //this function is for the board
  createCanvas(400, 400);
}

function draw() {
  fill(255);
  background(0, 0, 0);
  ellipse(100, bY, 20, 20); //this will display the ball
  bY = bY + 5; 

  ellipse(200, aY, 20, 20);
  aY = aY +5; 

  ellipse(100, dY, 20, 20); //this will display the ball
  dY = dY + 5; 

  ellipse(200, fY, 20, 20);
  fY = fY +5; 

  if(bY > height) //this determine the ball to reset once it hits the bottom
  {
    bY = 0; 
  }
  
  if (aY > height) {
    aY = 0;
  }

  if(dY > height) //this determine the ball to reset once it hits the bottom
  {
    dY = 0; 
  }
  
  if (fY > height) {
    fY = 0;
  }
  

  text("Your Score:", 300, 50);
  text(score, 300, 75);
}

function keyPressed() {
  if (key == 's' && bY > 350) {
    score = score + 25;
    bY = 0; //this will reset the ball after player press the key 
  }
  if (key == 'a' && aY > 350) {
    score = score + 25;
    aY = 0;
  }
  if (key == 'w' && dY > 350) {
    score = score + 25;
    dY = 0;
  }
  if (key == 'd' && fY > 350) {
    score = score + 25;
    fYY = 0;
  }
}
