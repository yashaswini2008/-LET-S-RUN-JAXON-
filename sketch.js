
var jaxon, jaxon_running;

var path, pathImage;

var left, right;



function preload(){

  //pre-load images

  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");

  pathImage = loadImage("path.png");

}



function setup(){

  createCanvas(400,400);



  //create sprites here

  path = createSprite(200,200)

  path.addImage("road",pathImage);

  path.velocityY = 4;



  jaxon = createSprite(200,190,20,50);

  jaxon.addAnimation("running", jaxon_running);

  jaxon.scale = 0.1;



 left = createSprite(10,200,40,400);

 left.visible = false;



 right = createSprite(380,200,40,400);

 right.visible = false;

}





function draw() {

  background("black");

  jaxon.x = World.mouseX

jaxon.collide(left);



if(path.y > 400){

  path.y=path.width/2

}



drawSprites();

}