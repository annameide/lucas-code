// The line below adds autocompletion for p5.js which is very Helpful
// <reference path="./p5.d.ts" />

// Here are the docs for P5.js: https://p5js.org/reference/

const container = document.getElementById('generative_art')


//new p5(algorithm, container)


function algorithm(sketch) {
  sketch.setup = function() {
    setupAlgorithms(sketch, container)
  };

  sketch.draw = function() {
    drawAlgorithms(sketch, container)
  };

  sketch.windowResized = function() {
    windowResizedForAllAlgorithms(sketch, container)
  }

  return sketch;
}

function setupAlgorithms(sketch, container){
  const boundingBox = container.getBoundingClientRect();
  sketch.createCanvas(500, 500);
  sketch.background(255);
  // first I decide on a color I want the lines to be when I start drawing
  sketch.stroke(0, 0, 255);
  sketch.textSize(32);
  sketch.noFill();
  sketch.text('my first generative art peace', 30, 30);
  sketch.text('is expensive', 50, 50);
}

function drawAlgorithms(sketch, container){
  // the line starts drawing with a blue stroke color from the setup.
  sketch.line(mouseX, mouseY, sketch.windowWidth / 2, 780);
  // the triangle starts drawing 
  sketch.fill(255, 255, 255);
  sketch.triangle(30, 75, mouseX, mouseY, 86, 75);
}

// The setup function is called once at the beginning
function setup() {
  const boundingBox = container.getBoundingClientRect();
  var myCanvas = createCanvas(boundingBox.width, boundingBox.height);
  //var myCanvas = createCanvas(600,600);
  myCanvas.parent("generative_art");
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