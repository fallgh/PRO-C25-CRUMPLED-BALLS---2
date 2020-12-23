
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj, paperObject,groundObject	
var world;
var dustbinImage,paperImage

 
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbin(1300,400);
	paperObject=new paper(200,450,40);
	groundObject=new ground(width/2,670,width,20);
	dustbin1 = new dustbin(1300, 463, 50, 200);
	dustbin2 = new dustbin(1280, 463, 50, 200);
	dustbin3 = new dustbin(1290, 583, 260, 50);
	//Create a Ground


	

	var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});

	Engine.run(engine);
	//Render.run(render);
  
}


function draw() {
  background(100);
  rectMode(CENTER);
  

  paperObject.display();
  groundObject.display();
  dustbinObj.display();
  
  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    
  	}
}





