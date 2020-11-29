const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var wall1, paperObject,groundObject;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1270, 570);
		//650
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(400,390,55);
	groundObject=new Ground(width/2,560,width,20);
	wall1=new Dustbin(1200,500,20,100);
	wall2=new Dustbin(1000,500,20,100);
	wall3=new Dustbin(1100,540,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
  
  paperObject.display();
  groundObject.display();
  wall1.display();
  wall2.display();
  wall3.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

  
	}
}










