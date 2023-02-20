// the project is about a breathing entity or shape. let's say a breathing pillow or meditation assistant against loneliness. 

// in this sketch I write the algorithm for the breathing curve

let d; // d is the diameter and it is the value that needs to change smoothly
let d2;
let button;
let oneShape = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  d = width / 10; // I give d a starting value once, because it can not begin with 0 (a 3d entity can not be 0 / nothing, have no volume at the beginning )
  button = createButton('alter shape');
  button.position(width / 2, height / 7);
  button.mousePressed(showOtherShapes);
}

function showOtherShapes() {

  oneShape = !oneShape;

}



// I use the function draw because the output needs to be animated
function draw() {

  if (oneShape === true) {
    breathe1();
  } else {
    breathe2();
  }


}

// the pillow shall be visually represented here through a cicrle(x,y,d)

let i = 0; // I need a counting variable in order to calculate the noise values
let j = 0;
function breathe1() {
  noStroke()
  fill("white")
  background("blue");
  let x = width / 2;
  let y = height / 2;

  i = i + 0.005 // incrementation stepwidth of the incrementation variable. it needs to be small so it runs smoothly

  d = noise(i) // calculation of noise values
  d = map(d, 0, 1, width / 10, width) // the noise values are mapped on a broader range

  circle(x, y, d) // the circle is drawn with a smoothly changing value of d (diameter) 
}

function breathe2() {
  //blendMode(MULTIPLY); why does it not work?
  noStroke()
  fill(255, 0, 0, 200)

  background(0, 0, 255);
  let x1 = width / 2;
  let y1 = height / 2;

  let x2 = width / 3;
  let y2 = height * 1 / 3;
  i = i + 0.005 // incrementation stepwidth of the incrementation variable. it needs to be small so it runs smoothly
  j = j + 0.05;

  d = noise(i) // calculation of noise values
  d = map(d, 0, 1, width / 10, width) // the noise values are mapped on a broader range
  d2 = width / 10 * sin(j) + width / 5;
  circle(x1, y1, d) // the circle is drawn with a smoothly changing value of d (diameter) 
  circle(x2, y2, d2) // the circle is drawn with a smoothly changing value of d (diameter) 
}