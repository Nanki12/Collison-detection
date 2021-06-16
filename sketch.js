var fixedRect, movingRect;
var gameObject1, gameObject2,gameObject3,gameObject4


function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(100,100,50,50)
  gameObject1.shapeColor="green"

  gameObject2 = createSprite(200,100,50,50)
  gameObject2.shapeColor="green"

  gameObject3 = createSprite(300,100,50,50)
  gameObject3.shapeColor="green"

  gameObject4 = createSprite(400,100,50,50)
  gameObject4.shapeColor="green"

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(collisionDetect(movingRect,fixedRect)){
      movingRect.shapeColor = "red";
      fixedRect.shapeColor = "red";
  }
  else{
      movingRect.shapeColor = "green";
      fixedRect.shapeColor = "green";
  }

  if(collisionDetect(movingRect,gameObject4)){
    movingRect.shapeColor = "red";
    gameObject4.shapeColor = "red";
}
else{
    movingRect.shapeColor = "green";
    gameObject4.shapeColor = "green";
}
  
  drawSprites();
}

function collisionDetect(obj1, obj2){
  if (obj1.x - obj2.x < obj2.width/2 + obj1.width/2
    && obj2.x - obj1.x < obj2.width/2 + obj1.width/2
    && obj1.y - obj2.y < obj2.height/2 + obj1.height/2
    && obj2.y - obj1.y < obj2.height/2 + obj1.height/2) {
      
      return true;
  }
  else {
     
      return false;
  }
}