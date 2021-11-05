var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;

var bg,bg2

function preload() {
// images are added 
  bg = loadImage("download.jpg")
 
}
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  // division objects
  for (var k = 0; k <=700; k = k + 70) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //1st row of plinko objects
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  // 2nd row of plinko objects
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  // 3rd row of plinko objects
  for (var j = 75; j <=width; j=j+50) 
  {
    plinkos.push(new Plinko(j,300));
  }
  
  // 4th row of plinko objects
  for (var j = 75; j <=width; j=j+80) 
  {
    plinkos.push(new Plinko(j,400));
  }

    
}
 


function draw() {
  background(bg);
  
  Engine.update(engine);
  ground.display();
  
  //display the plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //display the divisions
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  // the particles using frameCount
if(frameCount% 60===0){
  particles.push(new Particles(random(0,800),0))
}

  //display the particles 
for(var k = 0; k< particles.length; k++){
  particles[k].display()
}
}


