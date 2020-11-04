const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var stand;
function setup() 
{
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  stand = new Ground(200, 350, 800, 30);
}

function draw() 
{
  background(255,255,255);  
  Engine.update(engine);
  stand.display();
}