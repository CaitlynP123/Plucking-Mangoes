const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground 
var boy, boyImg
var tree, treeImg

function preload()
{
	boyImg = loadImage("Plucking mangoes/boy.png")
	treeImg = loadImage("Plucking mangoes/tree.png")
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

    floor = new Ground(400,700,4000,300)

	stone = new Stone(10,10,50,50)

	boy = createSprite(200,500,50,50)
	boy.addImage("boy", boyImg)
	boy.scale = 0.1

	mango1 = new Mango(550,200,50)
	mango2 = new Mango(400,230,50)
	mango3 = new Mango(700,230,50)
	mango4 = new Mango(650,180,50,50)
    mango5 = new Mango(600,200,50,50)
    mango6 = new Mango(530,300,50,50)
	mango7 = new Mango(560,250,50,50)
	mango8 = new Mango(485,190,50,50)
	mango9 = new Mango(700,300,50,50)
	mango10 = new Mango(600,140,50,50)
    mango11 = new Mango(500,230,50,50)
    mango12 = new Mango(640,300,50,50)

	string1 = new String(stone.stone, {x: 150, y:450})

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("grey");

  imageMode(CENTER)
  image(treeImg, 550,300, 400,400)

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();

  floor.display();

  stone.display();

  string1.display();

  detectCollision(stone,mango1)
  detectCollision(stone,mango2)
  detectCollision(stone,mango3)
  detectCollision(stone,mango4)
  detectCollision(stone,mango5)
  detectCollision(stone,mango6)
  detectCollision(stone,mango7)
  detectCollision(stone,mango8)
  detectCollision(stone,mango9)
  detectCollision(stone,mango10)
  detectCollision(stone,mango11)
  detectCollision(stone,mango12)


  drawSprites();
}
function mouseDragged(){
    Matter.Body.setPosition(stone.stone, {x:mouseX, y:mouseY})
}

function mouseReleased(){
	string1.detatch()
}

function keyPressed(){
    if(keyCode == 32){
        Body.setPosition(stone.stone, {x: 235, y:420})
        string1.attach(stone.stone)
    }
}

function detectCollision(lstone,lmango){
  mangoBodyPosition = lmango.mango.position
  stoneBodyPosition = lstone.stone.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance <= lmango.r + lstone.r)
    {
  	  Matter.Body.setStatic(lmango.mango,false);
    }
}