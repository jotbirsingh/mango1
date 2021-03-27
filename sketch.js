
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,slingShot;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
    mango=new Mango(980,300);
	mango1=new Mango(990,210);
	mango2=new Mango(910,210);
	mango3=new Mango(910,340);
	mango4=new Mango(1050,260);
	mango5=new Mango(1140,250);
	mango6=new Mango(930,240);
    mango7=new Mango(940,120);
	stone=new Stone(400,100,100,100);
    tree=new Tree(950,350,500,600);
	slingShot =new Slingshot(stone.body,{x:200,y:100});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  detectCollision(stone,mango);
  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
 ground.display();
 tree.display();
 mango.display();
 mango1.display();
 mango2.display();
 mango3.display();
 mango4.display();
 mango5.display();
 mango6.display();
 mango7.display();
 stone.display();
 slingShot.display();
}
function keyPressed(){
    if(keyCode === 32){
        Matter.body.setPosition(stone.body,{x:235,y:420})
        launcherObject.attach(stone.body);
    }
}
function detectCollision(stone,mango){
    mangoBodyPosition=mango.body.position
    stoneBodyPosition=stone.body.position

    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=mango.r+stone.r){
        Matter.body.setStatic(mango.body.false);
    }

}
function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}



