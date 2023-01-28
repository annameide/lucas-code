// The line below adds autocompletion for p5.js which is very Helpful
// <reference path="./p5.d.ts" />

// Here are the docs for P5.js: https://p5js.org/reference/

let canvas;
var widthCanvas=600;
var heigthCanvas=600;

// The setup function is called once at the beginning
function setup() {
  // this is the link from the java script file back to the html file
  canvas = createCanvas(widthCanvas, heigthCanvas);
  canvas.parent("canvas-container");
  
  background(255);
  // first I decide on a color I want the lines to be when I start drawing
  stroke(0, 0, 255);
  textSize(32);
  noFill();
  text('my first generative art piece', 30, 30);
  text('is expensive', 50, 50);
}

// The draw function is called on each frame (60 frames per second)!
function draw() {

  // the line starts drawing with a blue stroke color from the setup.
  line(mouseX, mouseY, widthCanvas / 2, 780);
  // the triangle starts drawing 
  fill(255, 255, 255);
  triangle(30, 75, mouseX, mouseY, 86, 75);
}

// as soon as the mouse is pressed the stroke color changes to green
function mousePressed() {
  stroke(0, 255, 0, mouseY);
  line(mouseX, mouseY, widthCanvas / 2, 600);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas("most_beautiful_art_ever", "png");
  }
}