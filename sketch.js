const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
var ground1 , division1 , division2 , engine ,  world ;

var divisions = []
var plinko = []
var particles = []
function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  ground1 = new Ground(240,790,780,10);
division1 = new Divisions(10,650,10,400)
division2 = new Divisions(470,650,10,400)
  
  

for(var i = 1; i <= 7; i = i+1){
  divisions.push(new Divisions(80*i, 685, 5, 300))
}

for(var i = 10; i <= 600; i = i+75){
  plinko.push(new Plinko(i, 200 , 10))
}

for(var i = 20; i <= 600; i = i+50){
  plinko.push(new Plinko(i, 250 , 10))
}

for(var i = 10; i <= 600; i = i+75){
  plinko.push(new Plinko(i, 300 , 10))
}

for(var i = 20; i <= 600; i = i+50){
  plinko.push(new Plinko(i, 350 , 10))
}
for(var i = 10; i <= 600; i = i+75){
  plinko.push(new Plinko(i, 400 , 10))
}

 
}


function draw() {
  //background(0,0,0);
  background(0); 
  Engine.update(engine) 
  ground1.display();
  division1.display();
  division2.display();
  //ground2.display();

  if(frameCount %90 === 0){
    particles.push(new Particle(random(100 , 400), 50 , 10 , 10))
  }

  for(var i = 0; i< particles.length; i++){
    particles[i].display()
  }

  for(var i = 0; i < 7; i++ ){
    divisions[i].display()
  }
  Engine.update(engine) 

  for(var i = 0; i < plinko.length;i++ ){
    plinko[i].display()
  }
  
}