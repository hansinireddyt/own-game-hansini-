var student, studentImg

function preload(){
 studentImg = loadImage("Assets/student1.png"); 
}

function setup() {
  createCanvas(800,400);
  student = createSprite(200, 200, 50, 50);
  student.addImage(studentImg);
  student.scale = 1;

  
}

function draw() {
  background(255,255,255); 

  drawSprites();
}