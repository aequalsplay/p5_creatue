// var scaler = 10;
var c0;
var c1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255, 120);
  c0 = new Creature(width/4, height/2, 0.5);
  c1 = new Creature(3 * width/4, height/2, 2);
}

function draw() {
  background(0);

  c0.display();
  c1.display();

}
