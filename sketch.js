// var scaler = 10;
var c0;
var c1;
let creatures = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noFill();
  stroke(255, 120);
  for (var i = 0; i < 5; i++) {
  creatures.push(new Creature(width/4 * i, height/2, 2));
  // c1 = new Creature(3 * width/4, height/2, 2);
}
}

function draw() {
  background(0);
  for (var i = 0; i < creatures.length; i++) {
  creatures[i].display();
}
  // c1.display();

}
