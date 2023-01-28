/// <reference path="./p5.d.ts" />
// Here are the docs for P5.js: https://p5js.org/reference/

let inc = 0.1;
let scl = 20;
let cols, rows;

function setup() {
  createCanvas(700, 500);
  cols = floor(width / scl);
  rows = floor(height / scl);
  pixelDensity(3)
}

function draw() {
  background(0, 0, 128);
  let yoff = 0;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      let angle = noise(xoff, yoff) * TWO_PI;
      let v = p5.Vector.fromAngle(angle);
      xoff += inc;
      stroke(255, 215, 0);
      push();
      translate(x * scl, y * scl);
      rotate(v.heading());
      fill(0, 0, 128);
      arc(0, 0, scl, 85, 6, PI + QUARTER_PI);
      pop();
    }
    yoff += inc;
  }
}

// a png is saved to the computer when the "s" key is pressed on the computer

function keyTyped() {
  if (key === 's') {
    saveCanvas("katjsfl-perlin", "png");
  }
}