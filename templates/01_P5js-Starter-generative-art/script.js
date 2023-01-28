// The line below adds autocompletion for p5.js which is very Helpful
/// <reference path="./p5.d.ts" />

// Here are the docs for P5.js: https://p5js.org/reference/

// The setup function is called once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  // first I decide on a color I want the lines to be when I start drawing
  stroke(0, 0, 255);
  textSize(32);
  noFill();
  text('my first generative art peace', 30, 30);
  text('is expensive', 50, 50);
}

// The draw function is called on each frame (60 frames per second)!
function draw() {

  // the line starts drawing with a blue stroke color from the setup.
  line(mouseX, mouseY, windowWidth / 2, 780);
  // the triangle starts drawing 
  fill(255, 255, 255);
  triangle(30, 75, mouseX, mouseY, 86, 75);
}

// as soon as the mouse is pressed the stroke color changes to green
function mousePressed() {
  stroke(0, 255, 0, mouseY);
  line(mouseX, mouseY, windowWidth / 2, 600);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas("most_beautiful_art_ever", "png");
  }
}