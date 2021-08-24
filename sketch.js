  


  var mario,marioImg;
  var world,worldImg
  var invisibleBlock;
  var hardBlock,hardBlockImg
  var obstacle1,obstacle2,obstacle3;
  var r,r2
  var start,startImg
  var play,playImg;
  var collidedImg
  var gameOver,gameOverImg
  var princess,princessCrying,princessHappy
  var castle,castleImg
  var lvl2start,lvl2startingImg
  var arrow,arrowImg;
  var lava,lavaImg
  var lavabackground,backgroundImg;
  var stone1,stone1Img
  var stone2,stone2Img;
  var stone3,stone3Img
  var mario1,mario1Img
  var princess,princessCrying,princessHappy
  var block,blockImg
  var block1
  var restart,restartImg
  var restart1,restart1Img
  var restart
  var star,starI

  //for making the gameStates
  var START          =1
  var PLAY           =2;
  var END            =3;
  var LVL2INSTRUCTION=4
  var LVL2           =5;
  var restart        =6
  var gameState      = START;


  //for the score
  var score = 0;
  var Star =0;

function preload(){
  marioImg       =loadAnimation("run1.png","run2.png","run3.png");
  worldImg       =loadImage("world.png");
  hardImg        =loadImage("hardblock.png");
  obstacle01     =loadImage("plant1.png");
  obstacle02     =loadImage("banana.png");
  obstacle03     =loadImage("enemy5.png");
  spikesImg      =loadImage("spikes.png");
  woodImg        =loadImage("wood.png");
  startImg       =loadImage("start.jpg");
  playImg        =loadImage("play.png")
  collidedImg    =loadAnimation("collided.png")
  gameOverImg    =loadImage("gameOver.jpg")
  princessCrying =loadImage("crying.png");
  princessHappy  =loadImage("happy.png")
  castleImg      =loadImage("castle.png");
  lvl2startingImg=loadImage("5333978.jpg")
  arrowImg       =loadImage("arrow.png")
  lavaImg        =loadImage("pngkit_mario-pixel-png_1691631-1.png")
  backgroundImg  =loadImage("Download Infernal Dark Cave With Lava Scene for free.jpg");
  mario1Img      =loadImage("run1.png");
  mario2Img      =loadImage("run2.png")
  princessCrying =loadImage("PngItem_4293376.png")
  princessHappy  =loadImage("pngegg.png")
  blockImg       =loadImage("Handpainted Textures.jpg")
  restartImg     =loadImage("Kit imprimible candy bar Super Mario Bross para cumpleaños Candy Bar Gratis.png");
  restart1Img    =loadImage("restart.png")
  starsI         =loadImage("star.png")
  marioJumpSound=loadSound("maro-jump-sound-effect_1.mp3",);

}

function setup() {
  createCanvas(600, 400);
  
  //for making the mario world
  world =  createSprite(300,130,600,400);
  world.addImage(worldImg);
  world.scale=0.7
  world.velocityX=-(3+1*score/100);
  world.visible=false;
  
   //for making main mario
  mario = createSprite(60,355,50,50);
  mario.addAnimation("running",marioImg)
  mario.addAnimation("collided",collidedImg);
  mario.scale=0.7;
  mario.visible=false;
  
  
  //for making the block which is being collided by mario
  invisibleBlock = createSprite(300,390,600,10)
  
  //for the group
  obstacleGroup = new Group();
  woodGroup     = new Group()
  spikesGroup   = new Group();
  enemyGroup    = new Group();
  starG         = new Group();
  
  //for making the start coverpage
  start = createSprite(300,200,600,400);
  start.addImage(startImg);
  start.scale=0.5;
  
  //for making the play option
  play = createSprite(300,300,50,50);
  play.addImage(playImg);
  play.scale=0.07;
  
  //for making the gameOverImage
  gameOver = createSprite(300,200,600,400);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.5;
  gameOver.visible=false;
  
  //for starting level2
  lvl2start = createSprite(300,200,600,400);
  lvl2start.addImage(lvl2startingImg)
  lvl2start.scale=0.3;
  lvl2start.visible=false;
  
  //for the level2 start
  arrow = createSprite(300,350,90,90);
  arrow.addImage(arrowImg);
  arrow.scale=0.05;
  arrow.visible=false;
  
  //for restarting if level1 is lost
  restart2 =createSprite(300,200,50,50);
  restart2.addImage(restart1Img);
  restart2.scale=0.1;
  restart2.visible=false;
  
   lavabackground=createSprite(300,180,600,400);
  lavabackground.addImage(backgroundImg);
  lavabackground.scale=1;
  lavabackground.visible=false;
  
  //for making level2 mario
  mario1 = createSprite(50,100,50,50);
  mario1.addImage(mario1Img);
  mario1.scale=0.6;
  mario1.visible=false;
  
  
  //the lava
  lava=createSprite(300,400,700,50)
  lava.addImage(lavaImg);
  lava.scale=0.9;
  lava.visible=false;
      
  //the block under princess
  block = createSprite(570,355,100,100);
  block.addImage(blockImg);
  block.scale=0.2;
  block.visible=false
      
  //the block under mario1
  block1=createSprite(10,355,100,100);
  block1.addImage(blockImg);
  block1.scale=0.2;
  block1.visible=false;
  
    //the stone
  stone1=createSprite(150,260,80,15);
  stone1.addImage(woodImg);
  stone1.scale=0.4;
  stone1.visible=false;
  
    //the stone
  stone2 = createSprite(280,240,80,15);
  stone2.addImage(woodImg);
  stone2.scale=0.4;
  stone2.visible=false;
  
  //the stone
  stone3 = createSprite(400,290,80,15);
  stone3.addImage(woodImg);
  stone3.scale=0.4;
  stone3.visible=false;
  
    //the princess
  princess=createSprite(570,200,50,50);
  princess.addImage(princessCrying);
  princess.scale=0.08;
  princess.visible=false;
  
   restart=createSprite(300,200,600,400);
  restart.addImage(restartImg);
  restart.scale=2;
  restart.visible=false;
    
  restart1 =createSprite(300,250,50,50);
  restart1.addImage(restart1Img);
  restart1.scale=0.2;
  restart1.visible=false;
  
}

function draw() {
  background(220);
  drawSprites();
  
  //gameState=START(the coverpage with start option)
  if(gameState === START){
    
  textSize(20);
  fill("black");
  textFont("Coiny")
  text("Hello,I am Mario. Our princess has been kidnapped.",100,100);
  text("Pls help me save her",100,120);
  text("INSTRUCTION---",100,150);
  text("1.Press UP ARROW to jump",100,170);
  text("Hello,I am Mario. Our princess has been kidnapped.",100,100);
    text("2.Complete level1 to go to level 2",100,190);
    text("3.Reach the score 1000 to get in level 2.",100,210);
     
  //for starting the game(if mouse is pressed over)
  if(mousePressedOver(play)){
  gameState = PLAY;
  }
    
  }
  
  
  
  //gameState=PLAY(for the main game)
if(gameState === PLAY){
    
  //to move the background
  if(world.x<0){
  world.x=width/2
  }
    
  //the visibily
  start.visible=false;
  play.visible=false;
  world.visible=true;
  mario.visible=true;
  gameOver.visible=false;
  restart2.visible=false;
  invisibleBlock.visible=false;
  mario1.visible=false;
  lava.visible=false;
  princess.visible=false;
  stone1.visible=false;
  lavabackground.visible=false;
    restart.visible=false;
    restart1.visible=false;
    
    
    
  //for colliding
  mario.collide(invisibleBlock);
  mario.collide(woodGroup);
  
  //for the gravity
  mario.velocityY = mario.velocityY + 0.8
  
  //for making mario jump
  if(keyDown(UP_ARROW)&&mario.y>=220 ) {
  mario.velocityY = -15;
    marioJumpSound.play();
  }
    
  spawnStars();
  
  camera.position.x = mario.position.x
    
  textSize(20);
  fill("black")
  textFont("trebuchetMS")
  text("score:"+score,500,50);
  text("Stars:"+Star,400,50);
  
  score = score + Math.round(getFrameRate()/60);

  mario.debug=true;
  mario.setCollider("rectangle",0,0,30,130)
    
    if(mario.isTouching(starG)){
      Star=Star+1;
      starG.destroyEach();
    }
    
  spawnObstacle()
  }
    
 
    
    //for generating into gameState END
            if(mario.isTouching(obstacleGroup)||mario.isTouching(spikesGroup)||mario.isTouching(enemyGroup)){
  gameState = END;
    }
      
    //the gameState END
  if(gameState === END){
    
  //to make the gameover screen visible
  gameOver.visible=true;
    mario1.visible=false;
  lava.visible=false;
  princess.visible=false;
  stone1.visible=false;
    stone2.visible=false;
    stone3.visible=false;
    block.visible=false;
    block1.visible=false;
    lavabackground.visible=false;
    restart.visible=false;
    restart1.visible=false;
  
  //for stopping all the back obstacle and images
  
  obstacleGroup.setVelocityXEach(0);
  woodGroup.setVelocityXEach(0);
  spikesGroup.setVelocityXEach(0);
  enemyGroup .setVelocityXEach(0);
  obstacleGroup.destroyEach();
  woodGroup.destroyEach();
  spikesGroup.destroyEach();
  enemyGroup.destroyEach();
      starG.destroyEach();
    
  //to make the restart button visible
  restart2.visible=true;
    
  //to come back to level1
  if(mousePressedOver(restart2)){
  gameState=PLAY;
  score=0;
    Star=0;
  }
    

  }
    
  //for changing into level 2 instruction page
  if(score===1000){
  gameState = LVL2INSTRUCTION;
  }
  
  //for the covergape of level2
  if(gameState === LVL2INSTRUCTION){
      
    
    //the visibility functions
  lvl2start.visible=true;
  arrow.visible=true;
  start.visible=false;
  world.visible=false;
  mario.visible=false;
  play.visible=false;
  
    //to stopr the background
  obstacleGroup.setVelocityXEach(0);
  woodGroup.setVelocityXEach(0);
  spikesGroup.setVelocityXEach(0);
  enemyGroup .setVelocityXEach(0);
  obstacleGroup.destroyEach();
  woodGroup.destroyEach();
  spikesGroup.destroyEach();
  enemyGroup.destroyEach();
      starG.destroyEach();
  
  
  
  textSize(30);
  fill("black")
  textFont("trebuchetMS")
  text("Well done!!",250,60);
  
  textSize(25);
  fill("black")
  textFont("trebuchetMS")
  text("You have succesfully completed level 1.",70,120);
  text("Now comes the real challendge.Pls help me save",70,145);
  text("my princess. Pass through lava and save my ",70,170);
  text("princess.",70,195);
  text("INSTRUCTION---",70,220);
    text("1.Press space to jump and RIGHT ARROW to move.",70,245);
    text("1.Don't fall in the lava.",70,270);
    
  //for changing into level2
  if(mousePressedOver(arrow)){
  gameState = LVL2;
  score=0;
    
  }
  
    
  } 
    

    

  if(gameState===LVL2){
   
    
  mario1.visible=true;
  lava.visible=true;
    princess.visible=true;
    stone1.visible=true;
    stone2.visible=true;
    stone3.visible=true;
    block.visible=true;
    block1.visible=true;
  lvl02();
  
  lvl2start.visible=false;
  arrow.visible=false;
  world.visible=false;
  mario.visible=false;
  play.visible=false;
      lavabackground.visible=true;
  
  
  obstacleGroup.setVelocityXEach(0);
  woodGroup.setVelocityXEach(0);
  spikesGroup.setVelocityXEach(0);
  enemyGroup .setVelocityXEach(0);
  obstacleGroup.destroyEach();
  woodGroup.destroyEach();
  spikesGroup.destroyEach();
  enemyGroup.destroyEach();
      starG.destroyEach();
  
      
  
  
  
  
      
   
    
  //the collide functions
  mario1.collide(stone1);
  mario1.collide(stone2);
  mario1.collide(stone3);
  mario1.collide(block1)
    
    //the lava background

      
  //to move mario to the right side
  if(keyDown(RIGHT_ARROW)){
  mario1.x=mario1.x+3;
  }
      
  //for the gravity
  mario1.velocityY = mario1.velocityY + 0.8
  
  //to make mario1 jump
  if(keyDown("space") ) {
  mario1.velocityY = -15;
    }
  
  //to change into restart
  if(mario1.isTouching(princess)){
  gameState=restart;
        
  }
      
  //to change into gamastate restart
  if(mario1.isTouching(lava)){
  gameState=END
  }
      
}
  
  //the main restart option
  if(gameState===restart){
    
  mario1.visible=false;
  lvl2start.visible=false;
  arrow.visible=false;
  world.visible=false;
  mario.visible=false;
  play.visible=false;
  lava.visible=false;
  //lavaBackground.visible=false;
  princess.visible=false;
  block.visible=false;
  block1.visible=false;
  stone1.visible=false;
  stone2.visible=false;
  stone3.visible=false;
    restart.visible=true;
    restart1.visible=true;
      
  
  
  obstacleGroup.setVelocityXEach(0);
  woodGroup.setVelocityXEach(0);
  spikesGroup.setVelocityXEach(0);
  enemyGroup .setVelocityXEach(0);
  obstacleGroup.destroyEach();
  woodGroup.destroyEach();
  spikesGroup.destroyEach();
  enemyGroup.destroyEach();
      starG.destroyEach();
    
  textSize(30);
  fill("black");
  text("Yay!!you have done it!!",150,100);
    text("Press Here to restart",230,300)
    
 
    
  if(mousePressedOver(restart1)){
  gameState=PLAY;
  }
    
  }
  
  }

  //the function for making the obstacles
function spawnObstacle(){
  if(frameCount % 100 === 0){
  r = Math.round(random (1,4));
  if(r == 1){
        obstacle1 = createSprite(700,350,10,10);
        obstacle1.addImage(obstacle01);
        obstacle1.scale = 0.09;
        obstacle1.y = 348;
        obstacle1.x = 600;
        obstacle1.velocityX = -(3+1* score/100);
        
        obstacleGroup.add(obstacle1);
     }
      if(r == 2){
        obstacle2 = createSprite(700,350,10,10);
        obstacle2.addImage(obstacle02);
        obstacle2.scale = 0.1
        obstacle2.y = 350;
        obstacle2.x = 650;
        obstacle2.velocityX = -(3+1* score/100);
        
        obstacleGroup.add(obstacle2);
     }
    
      if(r == 3){
        wood = createSprite(700,350,200,10,10);
        wood.addImage(woodImg);
        wood.scale = 0.5
        wood.y = 270
        wood.x = 600;
        wood.velocityX = -(3+1*score/100);
        
        woodGroup.add(wood);
        
        spikes= createSprite(700,350,10,10);
        spikes.addImage(spikesImg);
        spikes.scale = 0.04
        spikes.y = 335;
        spikes.x = 600;
        spikes.velocityX = -(3+1*score/100);
        
        spikesGroup.add(spikes);
        
     }
    
      
    
      if(r == 4){
        enemy = createSprite(300,200,10,10);
        enemy.addImage(obstacle03);
        enemy.scale = 0.5
        enemy.y = 350;
        enemy.x = 600;
        enemy.velocityX = -(3+1*score/100);
        
        enemyGroup.add(enemy);
     }
  }  
}

function lvl02(){
  
  
  
}
  
function spawnStars(){
  if(frameCount % 150 === 0){
     star = createSprite(600,200,10,10);
     star.addImage(starsI);
     star.scale = 0.12;
     star.y = Math.round(random(80,260));
     star.velocityX = -(3+1*score/100); 
    
     starG.add(star);
  }
}
