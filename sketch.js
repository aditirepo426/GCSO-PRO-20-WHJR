var  wall , car 
var speed , weight , deformation;

function setup() {
  createCanvas(1200,600);

  speed = random(55,90);
  weight = random(400,1500); 

  car = createSprite(100, 300, 100, 80);
  car.velocityX = speed;
  car.shapeColor = "white";

  wall = createSprite(1000, 300, 60, height/2);
  wall.shapeColor = color(80,80,80);
  
  
}

function draw() {
  background(950,120,184);  
  
  
  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX = 0; 
    deformation = (0.5 * weight * speed * speed) /22509;
  
    if(deformation >  Math.round(180)){
      car.shapeColor = "red";
      
    }
    if(deformation < Math.round(180) && deformation > Math.round(100) ){
      car.shapeColor = "yellow";
     
    }
    if( deformation < Math.round(100)){
      car.shapeColor = "green";
     
    }
  }

  textSize(25);
  text(" Green - Safe", 50,50);
  text("Yellow - Medium ", 100,100);
  text("Red - Dangerous",150,150);

  drawSprites();
}
    











