var trex
var chao
var anichao
var anitrex
function setup(){
  createCanvas(600,200);
  trex = createSprite (50,160,20,20);
  chao = createSprite (200,190,600,20);
  trex.addAnimation ("trex correndo",anitrex);
  trex.scale = 0.50
  chao.addImage(anichao)
}

function draw(){
  background("black");
  drawSprites();
}
function preload(){
anitrex = loadAnimation("trex1.png","trex3.png","trex4.png");
anichao = loadImage("ground2.png");  
}