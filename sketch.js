var bg 

function preload(){
bg = loadImage('snow1.jpg');
sn = loadImage('snow4.webp');
}
function setup() {
  createCanvas(800,400);
  abc = createSprite(400, 200, 50, 50);
}

function draw() {
  background(bg);
  for (var i = 0; i<1; i++){
    snow = createSprite(random(0,800),random(0,0))
    snow.addImage(sn);
    snow.velocityY = 1
    snow.scale = 0.02
    
  }
  move();  
  drawSprites();
}
function move(){
  if (keyCode === UP_ARROW ){
    abc.y = abc.y -10
  }
  if (keyCode === DOWN_ARROW ){
    abc.y = abc.y +10
  }
  if (keyCode === LEFT_ARROW ){
    abc.x = abc.x -10
  }
  if (keyCode === RIGHT_ARROW ){
    abc.x = abc.x +10
  }
  
}