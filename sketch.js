
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1140,100,25);
	mango3=new mango(1000,300,30);
	mango4=new mango(1200,90,35);
	mango5=new mango(1145,157,28);
	mango6=new mango(random(650,1300),random(10,200),33);
	mango7=new mango(random(650,1300),random(10,300),29);
	mango8=new mango(random(650,1300),random(10,200),33);
	mango9=new mango(random(650,1300),random(10,300),30);
    stoneObj=new stones(240,420,60,60);
	treeObj=new tree(950,680);
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new Slingshot(stoneObj.body,{x:240,y:420})
	Engine.run(engine);

}

function draw() {

  background(230);
  if(stoneObj.body.position.x<100||stoneObj.body.position.x>320){
    textSize(50);
    fill("blue");
    text("press Space to start again",10,300);
  }
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  launcherObject.display();

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  stoneObj.display();  
  groundObject.display();
  launcherObject.display();
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    launcherObject.fly();
}
function detectCollision(lstones,lmango){
  if(lstones.body.position.x>lmango.body.position.x-65
    &&lstones.body.position.x<lmango.body.position.x+65
    &&lstones.body.position.y<lmango.body.position.y+65
    &&lstones.body.position.y>lmango.body.position.y-65){
		Matter.Body.setStatic(lmango.body,false);
	}
}
function keyPressed(){
  if(keyCode===32){
    Body.setPosition(stoneObj.body,{x:220,y:440})
    launcherObject.attach(stoneObj.body);
  }
}