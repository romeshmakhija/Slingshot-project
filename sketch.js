const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,rock;
var pig,ball;
var ground;
var sling;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    box0 = new Box(646,300,110,10);
    box1 = new Box(600,365,30,25);
    box2 = new Box(601,330,20,20);
    box4 = new Box(691,365,30,25);
    box5 = new Box(691,330,20,20);
    pig1 = new Pig(648,365,25,25);
    pig2 = new Pig(649,280,20,20);
    rock1 = new Rock(530,280,50,120);
    ball = new Ball(200,365);
    slingshot = new SlingShot(ball.body,{x:200,y:320});
    ground = new Ground(400,390,800,20);
}

function draw(){
    background(255,239,68);
    Engine.update(engine);
    box0.display();
    box1.display();
    box2.display();
    box4.display();
    box5.display();
    pig1.display();
    pig2.display();
    rock1.display();
    ball.display();
    slingshot.display();
    ground.display(); 
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    slingshot.fly();
}