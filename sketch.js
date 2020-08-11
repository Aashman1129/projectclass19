var ball,img,paddle,edge;



function preload() {
ball1=loadImage("ball.png");
paddle1=loadImage("paddle.png");

}
function setup() {
createCanvas(400, 400);
ball=createSprite(60,200,20,20);
ball.addAnimation("abc",ball1);
ball.velocityX=8

paddle=createSprite(340,200,20,70);
paddle.addAnimation("def",paddle1);
  
  
}

function draw() {
  background(205,153,0);
  
ball.bounceOff(paddle,randomVelocity);
  
edge=createEdgeSprites();
  

  
  
  
ball.bounceOff(edge[0]);
ball.bounceOff(edge[2]);
ball.bounceOff(edge[3]);
paddle.bounceOff(edge[0]);
paddle.bounceOff(edge[2]);
paddle.bounceOff(edge[3]);
paddle.bounceOff(edge[1]);


  
  if(keyDown(UP_ARROW)) {
  paddle.velocityY=-5;  
  }
  
  if(keyDown(DOWN_ARROW)){
  paddle.velocityY=5;   
  }
  drawSprites();
  
}

function randomVelocity()
{
 ball.velocityY=random(8,-8); 
}

