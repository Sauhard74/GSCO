var car ,wall,speed;

function setup() {
  createCanvas(1700,400);
  

  speed=random(45,90)
  weight=random(500,1400)
  
  car=createSprite(200,200,20,20)
  car.shapeColor=color(255)
  car.velocityX=speed;

  wall=createSprite(1100,200,60,height/2)
  wall.shapeColor=color(80,80,80)
}
function draw(){
  background(0);  
  

  if(wall.x-car.x  < (wall.width+car.width)/2){
    car.velocityX=0;
    var deformation = 0.5*speed*weight*speed/22509;

    if(deformation<100){
     // Text("Safe!!", 200,200)
      car.shapeColor=color(0,128,0)
    }
  
  if(deformation<180 && deformation>100){
    //Text("Average",200,200)
    car.shapeColor=color(230,230,0)
  }

  if(deformation>180){
  //Text("Lethal!!",200,200)
  car.shapeColor=color(0,250,0)
}
  }
  
  drawSprites();
}
