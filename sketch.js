var iss, spacecraft;
var bg,issImg,spacecraftImg;
var hasDocked = false;

function preload(){
  bg = loadImage("Docking-undocking/spacebg.jpg");
  issImg = loadImage("Docking-undocking/iss.png");
  spacecraftImg = loadImage("Docking-undocking/spacecraft1.png");
  spacecraftImg1= loadImage("Docking-undocking/spacecraft2.png");
  spacecraftImg2= loadImage("Docking-undocking/spacecraft3.png");
  spacecraftImg3= loadImage("Docking-undocking/spacecraft4.png");

}


function setup() {
  createCanvas(800,400);

  spacecraft = createSprite(300,240);
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale = 0.20;

  iss =createSprite(350,150);
  iss.addImage(issImg);
  
  
}

function draw() {
  background(bg); 
  
  if(!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);

}
spacecraft.addImage(spacecraftImg);
if(keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y -2;
}

if(keyDown("LEFT_ARROW")){
  spacecraft.addImage(spacecraftImg3);
spacecraft.x = spacecraft.x - 1;
}

if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage(spacecraftImg2);
spacecraft.x = spacecraft.x + 1;
}

if(keyDown("DOWN_ARROW")){
  spacecraft.addImage(spacecraftImg1);
}

if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
  hasDocked = true;
  textSize(25);
  fill("white")
  text("Docking Successful!", 200, 300);
}

drawSprites()
}