var bY = 0;
var score = 0;
function setup() { //this function is for the board
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(255);
  background(0, 0, 0);
  ellipse(200, bY, 20, 20); //this will display the ball
  bY = bY + 5; 

  if(bY > windowHeight) //this determine the ball to reset once it hits the bottom
  {
    bY = 0; 
  }
  

  text("Your Score:", 300, 50);
  text(score, 300, 75);
}

function keyPressed() {
  if (key == 's' && bY > 350) {
    score = score + 25;
    bY = 0; //this will reset the ball after player press the key 
  }
  if (key == 'a' && bY > 350) {
    score = score + 25;
    bY = 0;
  }
  if (key == 'w' && bY > 350) {
    score = score + 25;
    bY = 0;
  }
  if (key == 'd' && bY > 350) {
    score = score + 25;
    bY = 0;
  }
}
