var PLAY = 1;
var END = 0;
var gameState = PLAY;



var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("monkey_0.png","monkey_1.png","monkey_2.png","monkey_3.png","monkey_4.png","monkey_5.png","monkey_6.png","monkey_7.png","monkey_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
 
  restartImg = loadImage("restart.png")
  gameOverImg = loadImage("gameOver.png")
  

}

function setup() {
createCanvas(600,200); 
var message="this is the message";
  console.log(message)
  
 monkey=createSprite(80,315,20,20)  
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  gameOver=createSprite(300,100);
  gameOver.addImage(gameOverImg);
  
  
restart=createSprite(300,140);
  restart.addImage(restartImg);
  
  gameOver.scale=0.5;
  restart.scale=0.5;
  
   invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
   
   //create Obstacle and Cloud Groups
  obstaclesGroup = createGroup(); 
  
  score=0;
  var survivalTime=0;
  stroke("white");
  textSize(20);
  fill("white");
  text("score:"+score,500,50);
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate())
  text("survival Time:"+survivalTime,100,50);
  
}


function draw() {
  
  background(180);
  //displaying score
  text("Score: "+ score, 500,50);
  
  
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //spawn the clouds
  spawnfood();
  
     
drawSprite();
  
}

function spawnfood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    food = createSprite(600,100,40,10);
    food.addImage(cloudImage)
    food.y = Math.round(random(10,60))
    food.scale = 0.4;
    food.velocityX = -3;
  } 
 
{
    //assigning lifetime to the variable
    food.lifetime = 134
    
    //adjust the depth
    food.depth = trex.depth
    monkey.depth = trex.depth + 1;
    }
}
