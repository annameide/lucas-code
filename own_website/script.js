// The line below adds autocompletion for p5.js which is very Helpful
// <reference path="./p5.d.ts" />

// Here are the docs for P5.js: https://p5js.org/reference/

let scriptCanvas;
var widthCanvas;
var heigthCanvas;
var Bpressed=true;

  
// The setup function is called once at the beginning
function setup() {
  widthCanvas=windowWidth;
  heigthCanvas=windowHeight;
  // this is the link from the java script file back to the html file
  //canvas = createCanvas(widthCanvas, heigthCanvas);
  //let elt = document.getElementById('container');
  //let div1 = createDiv();
  //div1.parent(elt); // use element from page
  //div1.id('canvas-container');
  //div1.size(windowWidth*0.6, windowHeight);
  
  //canvas = createCanvas(windowWidth*0.5, windowHeight*0.5);
  scriptCanvas = createCanvas(widthCanvas, heigthCanvas);
  scriptCanvas.parent("canvas-container");
  
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
  line(mouseX, mouseY, widthCanvas / 2, heigthCanvas-heigthCanvas/10);
  // the triangle starts drawing 
  fill(255, 255, 255);
  triangle(30, 75, mouseX, mouseY, 86, 75);
}

// as soon as the mouse is pressed the stroke color changes to green
function mousePressed() {
  if (Bpressed==true){
    stroke(0, 255, 0, mouseY);
    Bpressed=false;
  }
  else {
    stroke(0, 0, 255, mouseY);
    Bpressed=true;
  }
    
  line(mouseX, mouseY, widthCanvas / 2, heigthCanvas-heigthCanvas/10);
}

function keyTyped() {
  if (key === 's') {
    saveCanvas("most_beautiful_art_ever", "png");
  }
}
