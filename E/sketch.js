var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
  //loadImage de path (camino)
  paso = loadImage(path.png)
  //loadAnimation de boy (niño)
  J = loadAnimation(Jake1.png, Jake2.png, Jake3.png, Jake4.png, Jake5.png)
 
}

function setup(){
  
  createCanvas(400,400);
 //crear sprite de path (camino) 
 var path = createSprite(300, 300, 20, 20)
//agregar imagen de path
path.addImage(paso)
//Hacer que la pista sea un fondo en movimiento al darle velocidad Y.
path.velocityX = -12
  if (path.y < 0){
    path.y = path.width/2
path.scale=1.2;

//crear sprite de boy (niño)
var boy = createSprite(300, 300, 20, 20)
//agregar animación para boy
boy.scale=0.08;
  
// crear  left Boundary (límite izquierdo)
leftBoundary=createSprite(0,0,100,800);
////establecer visibilidad como false (falso) para límite izquierdo

//crear right Boundary (límite derecho)
rightBoundary=createSprite(410,0,100,800);
//establecer visibilidad como false (falso) para límite izquierdo
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  // boy moviéndose en el eje X con el mouse
  boy.x = World.mousex
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  // colisión de boy con los límites derecho e izquierdo invisibles 
  boy.collide(leftBoundary)
  boy.collide(rightBoundary)
  //código para reiniciar el fondo
  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}