const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
  buggy1=new buggy(50,200,50,50);
  buggy2=new buggy(150,200,50,50);
  buggy3=new buggy(250,200,50,50);
  buggy4=new buggy(350,200,50,50);
  buggy5=new buggy(450,200,50,50);
  buggy6=new buggy(550,200,50,50);
  rock1=new rock(1100,200,100,100);
  chain1=new chain(buggy1.body,buggy2.body);
  chain2=new chain(buggy2.body,buggy3.body);
  chain3=new chain(buggy3.body,buggy4.body);
  chain4=new chain(buggy4.body,buggy5.body);
  chain5=new chain(buggy5.body,buggy6.body);
}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  buggy1.show();
  buggy2.show();
  buggy3.show();
  buggy4.show();
  buggy5.show();
  buggy6.show();
  rock1.show();
 chain1.show();
 chain2.show();
 chain3.show();
 chain4.show();
 chain5.show();
 var colllision=Matter.SAT.collides(buggy6.body,rock1.body);

  if(colllision.collided){

    flag=1;
  } 
  if(flag===1){
    textSize(30);
    fill("orange")
    text("CRASH",500,200);
    //crashSound.play()
  }

  }

  function keyPressed(){

    if(keyCode===RIGHT_ARROW){
      Matter.Body.applyForce(buggy6.body,{x:buggy6.body.position.x,y:buggy6.body.position.y},{x:0.5,y:0})
      //trainSound.play()
    }
  }
