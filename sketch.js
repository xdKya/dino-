var dino,dinoImg;
var paredes;

function preload(){
  //pré carrega os arquivos 
  //som, imagem, etc

  dinoImg = loadAnimation("trex3.png","trex4.png");
}

function setup(){
  //função de configuração
  createCanvas(600,200);

  dino = createSprite(50,100,10,10);
  dino.addAnimation("running",dinoImg);
  dino.scale = 0.5;

  paredes = createEdgeSprites();
}

function draw(){
  background('white');

  if(keyDown("space")){
    dino.velocityY = -10;
  }

  //gravidade
  dino.velocityY = dino.velocityY + 1;

  dino.collide(paredes[3]);


  drawSprites();
}


