var object1,object2;


function setup() {

  createCanvas(800,400);
  movingRect=createSprite(100, 200, 50, 50);
  movingRect.shapeColor="blue";
  fixedRect=createSprite(700,200,50,70);
  fixedRect.shapeColor="blue";
  fixedRect.velocityX=-2;
  movingRect.velocityX=2;

}

function draw() {
  background(100);  

  bounceOff(fixedRect,movingRect);
  
  drawSprites();
}

