/// <reference path="./p5.d.ts" />
// Here are the docs for P5.js: https://p5js.org/reference/

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  //drawPerlinChart() // COMMENT IN AND OUT
  //drawBee() // COMMENT IN AND OUT
}

let x = 0
function drawPerlinChart() {
  background("blue") // COMMENT IN AND OUT
  noStroke()
  fill("pink")


  // map(value, start1, stop1, start2, stop2) the result is saved in the variable y
  //let step = x / 100;
  //let y = noise(step); // hey noise function start with the step value and give me a smooth random number at the position step, store this new value in the variable y
  //y = map(y, 0, 1, height, 0)
  let y = map(noise(x / 100), 0, 1, height, 0)

  ellipse(x, y, 20, 20)

  x += 1
}
// _______

let xoff1 = 0
let xoff2 = 50
let xoffR = 100

function drawBee() {
  noStroke()
  fill("yellow")
  background("red");

  xoff1 += 0.005
  xoff2 += 0.005
  xoffR += 0.05

  let x = noise(xoff1) * width // times width is used to keep the ellipse inside the sketch width. same with heighth
  let y = noise(xoff2) * height
  let w = map(noise(xoffR), 0, 1, 5, 40)

  ellipse(x, y, w, w)
}
