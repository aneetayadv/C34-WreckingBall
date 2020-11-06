const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var myEngine,myWorld;
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10,b11,b12,b13,b14,b15,b16,b17,b18,b19,b20,b21;
var ball;
var roof,rope;
var stack1 = [];
var stack2 = [];
var stack3 = [];

function setup() {
  createCanvas(1200,600);
  
  myEngine = Engine.create();
  myWorld = myEngine.world;

  ground = new Ground(600,580,1200);

  for(var i=0; i<=7 ;i++){
    stack1.push(new Box(800,100));
  }

  for(var j=0; j<=7 ;j++){
    stack2.push(new Box(900,100));
  }

  for(var k=0; k<=7 ;k++){
    stack3.push(new Box(1000,100));
  }

 /* b1 = new Box(800,100);
  b2 = new Box(800,100);
  b3 = new Box(800,100);
  b4 = new Box(800,100);
  b5 = new Box(800,100);
  b6 = new Box(800,100);
  b7 = new Box(800,100);

  b8 = new Box(900,100);
  b9 = new Box(900,100);
  b10 = new Box(900,100);
  b11 = new Box(900,100);
  b12 = new Box(900,100);
  b13 = new Box(900,100);
  b14 = new Box(900,100);

  b15 = new Box(1000,100);
  b16 = new Box(1000,100);
  b17 = new Box(1000,100);
  b18 = new Box(1000,100);
  b19 = new Box(1000,100);
  b20 = new Box(1000,100);
  b21 = new Box(1000,100);*/

  ball = new Ball(400,200);
  roof = new Ground(500,50,50);
  rope = new Rope(ball.body,roof.body);
}


function draw() {
  background(0);  
  Engine.update(myEngine);
  ground.show();

  for(var i=0; i<stack1.length;i++){
    stack1[i].show();
  }

  for(var j=0; j<stack2.length;j++){
    stack2[j].show();
  }

  for(var k=0; k<stack3.length;k++){
    stack3[k].show();
  }

 /* b1.show();
  b2.show();
  b3.show();
  b4.show();
  b5.show();
  b6.show();
  b7.show();
  b8.show();
  b9.show();
  b10.show();
  b11.show();
  b12.show();
  b13.show();
  b14.show();
  b15.show();
  b16.show();
  b17.show();
  b18.show();
  b19.show();
  b20.show();
  b21.show();*/

  
  ball.show();
  rope.show();
}

function mouseDragged(){
  Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}