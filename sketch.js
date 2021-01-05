var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,world,engine;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
	box1 = new Box(340,650,200,20);
	box2 = new Box(440,610,20,100);
	box3 = new Box(240,610,20,100);

  
} 


function draw() {
  rectMode(CENTER);
  background("lightblue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  if(helicopterSprite.x<0){
	text("You Faild",400,300)
  }
 
  keyPressed();
  drawSprites();
  box1.display();
  box2.display();
  box3.display();
text(mouseX+","+mouseY,200,200)

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	
	Matter.Body.setStatic(packageBody,false)
    
}
  if(keyCode === LEFT_ARROW){
	helicopterSprite.x= helicopterSprite.x-10;
	translation={x:-10.1,y:0}
	
	Matter.Body.translate(packageBody,translation)
	
}
if(keyCode === RIGHT_ARROW){
	helicopterSprite.x= helicopterSprite.x+10;
	translation={x:+10.1,y:0}
	
	Matter.Body.translate(packageBody,translation)
	
}
}



