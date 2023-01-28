
// let house is an object, which is defined here. it defines the shape and the position of the house rectangele. every property has a name which can be called later with the object-name.property-name
let house = { // object name
  width: 500, // property: value 
  height: 500, // property name: value
  xPosition: 50, // property name: value
  yPosition: 100 // property name: value
}

// each window is defined as an object
let window0 = {
  width: 30, // property name: value 
  height: 50, // property name: value
  xPosition: house.xPosition + 50, // property name: value
  yPosition: house.yPosition + 100 // property name: value
}

let window1 = {
  width: 30, // property name: value 
  height: 50, // property name: value
  xPosition: house.xPosition + 150, // property name: value
  yPosition: house.yPosition + 100 // property name: value
}

let window2 = {
  width: 30, // property name: value 
  height: 50, // property name: value
  xPosition: house.xPosition + 250, // property name: value
  yPosition: house.yPosition + 100 // property name: value
}


// the window objects are put inside an array, to shorten the code in the function drawWindow
let windows = [
  // an array must be defined here
  window0, window1, window2
];

// The setup function is called once at the beginning
function setup() {
  createCanvas(600, 600);
  background(240);

  drawHouse();
  drawWindow(windows[0]);
  drawWindow(windows[1]);
  drawWindow(windows[2]);
}

function drawHouse() {

  fill(200);
  noStroke();
  // in order to draw the house rectangle the house object property values are called
  rect(house.xPosition, house.yPosition, house.width, house.height)
  fill(150, 100, 20);
  triangle(house.xPosition, house.yPosition, width / 2, 0, house.xPosition + house.width, house.yPosition);
}

// this step is WAY too abstract for me yet. why can I call the parameter / input whatever I want??? 
function drawWindow(windowObject) {
  fill(20);
  stroke(0);
  // in order to draw the window rectangle the window object property values are called 
  rect(windowObject.xPosition, windowObject.yPosition, windowObject.width, windowObject.height);
}
