
var path,roadImg
var player,playerImg
var speed
var leftBoundary,rightBoundary
var frame
var car
var car1img
var car2img
var r
var score
var textalert
var GameOver
var GameOverImg
var lives
function preload(){

 playerImg = loadImage("yes.png")
 car1img = loadImage("beetle.png")
 car2img = loadImage("—Pngtree—car top view image_8931232.png")
 roadImg = loadImage("Screenshot 2023-12-13 at 10.24.39 PM.png")
 car=createSprite(400,0);
 car.visible=false
 GameOverImg = loadImage("GameOver.png")

}

function setup() {
    
    createCanvas(400,400)
    score=0
    speed=0
    frame=0
    lives=40
    textalert=0
    path=createSprite(200,200);
    path.addImage(roadImg);
    player=createSprite(200,300)
    player.addImage(playerImg)
    player.scale=0.08
     
    leftBoundary= createSprite(0,400,5,400)
    leftBoundary.visible = true

    rightBoundary= createSprite(400,400,5,400)
    rightBoundary.visible = true

    GameOver=createSprite(200,200);
    GameOver.addImage(GameOverImg);
    GameOver.visible= false
    GameOver.scale=1
        
  

    
    
}

function draw() {





    
    if (keyDown(UP_ARROW)){
    speed=speed+4
  
}
if (keyDown(DOWN_ARROW)){
    speed=speed-20

}
    
    else if (keyDown(RIGHT_ARROW)){
        player.velocityX=player.velocityX+1
    }
    else if (keyDown(LEFT_ARROW)){
        player.velocityX=player.velocityX-1
       
    }

    player.collide(leftBoundary);
    player.collide(rightBoundary);

    console.log(speed)
    path.velocityY = speed/20
    if(path.y > 400 ){
        path.y = height/2;
       if (speed >=60){
        score=score+2
       }
      }
    
      if (speed <= 0){
        speed=0
  
        
      }
      if (speed > 1400){
        speed=1400
      }

    console.log(score)
  

if (path.velocityY>=0){
  frame=frame+2
}else if(path.velocityY==0){
  frame=1
}

console.log(frame)
if (player.collide(car)){
  car.visible=false
  path.destroy();
  car.destroy();
  player.destroy();
  player.visible=false
  frame = 101
  path.velocityY = 0
  speed = 0
  GameOver.visible= true
  GameOver.depth=car.depth+1
}
spawncars();

      drawSprites();

      fill("white");
      textSize(25);
text("speed : "+ Math.round(speed/7)+"MPH",250,50);


fill("white");
textSize(25);
text("score : "+ score,250,350);
}

function spawncars(){
   
  if (frame%200==0 && speed >=60){
 
    car=createSprite(0,200);
    car.x = 0    
    car.y = -40 
    r=Math.round(random(1,2));
    if (r == 1) {
      car.addImage(car1img);
      car.scale=0.08
    } else if (r == 2) {
      car.addImage(car2img);
      car.scale=0.1
    }
    
    car.x=Math.round(random(0,400));
    car.setLifetime=-1;
    
    car.velocityY=path.velocityY
    car.setCollider('rectangle',0,0,50,90)
    car.visible=true

    if (car.isTouching(car)){
      car.destroy();
    }
    }

        
}
