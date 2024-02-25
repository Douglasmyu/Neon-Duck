var start = document.getElementById("start");
var game = document.getElementById("game"); 
var sound = new Audio('mixkit-retro-game-notification-212.wav');

start.addEventListener("click", function(){
  start.style.display = "none"; 
  game.style.display = "block"; 
  setup();
});

var canvas; 

var bY = 0;
var aY = 0;
var dY = 0;
var fY = 0;

var score = 0;
function setup() { //this function is for the board
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(255);
  background(0, 10);

  //ellipse(100, bY, 20, 20); //this will display the ball
  text("s", 100, bY + 30);
  bY = bY + 1; 

  //ellipse(200, aY, 20, 20);
  text("a", 140, aY + 30);
  aY = aY + 1; 

  //ellipse(100, dY, 20, 20); //this will display the ball
  text("w", 120, dY + 30);
  dY = dY + 1; 

  //ellipse(200, fY, 20, 20);
  text("d", 160, fY + 30);
  fY = fY + 1; 

  if(bY > height) //this determine the ball to reset once it hits the bottom
  {
    bY = 0; 
    score = score - 25; 
  }
  
  if (aY > height) {
    aY = 0;
    score = score - 25; 
  }

  if(dY > height) //this determine the ball to reset once it hits the bottom
  {
    dY = 0; 
    score = score - 25; 
  }
  
  if (fY > height) {
    fY = 0;
    score = score - 25; 
  }
  

  text("Your Score:", width - 100, 50);
  text(score, width - 100, 75);
}

function keyPressed() {
  if (key == 's' && bY > 350) {
    score = score + 25;
    sound.play(); //play sound
    bY = 0; //this will reset the ball after player press the key 
  }
  if (key == 'a' && aY > 350) {
    score = score + 25;
    aY = 0;
    sound.play();
  }
  if (key == 'w' && dY > 350) {
    score = score + 25;
    dY = 0;
    sound.play();
  }
  if (key == 'd' && fY > 350) {
    score = score + 25;
    fY = 0;
    sound.play();
  }
}


function game_over(){
  if (score <= 0){
    textSize(32);
    fill(0);
    textAlign(CENTER);
    text("GAME OVER!", width / 2, height / 2);
  }
}
