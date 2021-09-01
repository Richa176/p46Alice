let ground;
let lander;
var diver_img;
var bg_img;
var weed1_img;
var Sophia;
var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  diver_img = loadAnimation("diver1.png","diver2.png","diver3.png");
  
  bg_img = loadImage("bg1.jpg");

  weed_img = loadImage("seaweed1.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

 Sophia=createSprite(100,500,15,15);
  Sophia.addAnimation("dvr",diver_img);
  Sophia.scale=0.8;
  
  var wall1=createSprite(750,50,20,200);
 wall1.shapeColor="blue";
 wall1.addImage(weed_img);
 wall1.scale=0.3;



  // var wall2=createSprite(365,50,20,100);
  // wall2.shapeColor="blue";

  
  var wall3=createSprite(350,300,150,20);
  wall3.shapeColor="blue";
  
  var wall4=createSprite(410,50,90,20);
  //wall4.shapeColor="blue";
  wall4.addImage(weed_img);
  wall4.scale=0.2;
  
  var wall5=createSprite(345,500,20,120);
   wall5.addImage(weed_img);
  wall5.scale=0.2;
  
  var wall6=createSprite(690,200,20,110);
  wall6.shapeColor="blue";
  
  var wall7=createSprite(690,330,200,20);
  wall7.shapeColor="blue";
  
  var wall8=createSprite(690,120,130,20);
  wall8.shapeColor="blue";
  
  var wall9=createSprite(600,219,20,100);
  wall9.shapeColor="blue";
  
  // var wall10=createSprite(700,400,40,90);
  // wall10.shapeColor="yellow";
  
  var wall11=createSprite(840,500,20,120);
  wall11.shapeColor="blue";
  
  var wall12=createSprite(520,400,130,20);
  wall12.shapeColor="blue";
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(bg_img);
 // image(bg_img,0,0);

if(keyDown(UP_ARROW)){
  Sophia.y=Sophia.y-2;
}

if(keyDown(DOWN_ARROW)){
  Sophia.y=Sophia.y+2;
}
if(keyDown(LEFT_ARROW)){
  Sophia.x=Sophia.x-2;
}
if(keyDown(RIGHT_ARROW)){
  Sophia.x=Sophia.x+2;
}






 
  drawSprites();
}


