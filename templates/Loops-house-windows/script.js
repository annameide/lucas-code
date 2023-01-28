// The line below adds autocompletion for p5.js which is very Helpful
/// <reference path="./p5.d.ts" />

// HELP: https://replit.com/@vogelino/P5js-Loops

// Here are the docs for P5.js: https://p5js.org/reference/
let windows = [
  {
    w: 60,
    h: 100,
    x: 70,
    y: 120
  },
  {
    w: 60,
    h: 100,
    x: 170,
    y: 120
  },
  {
    w: 60,
    h: 100,
    x: 270,
    y: 120
  },
  {
    w: 60,
    h: 100,
    x: 70,
    y: 260
  },
  {
    w: 160,
    h: 100,
    x: 170,
    y: 260
  },
  {
    w: 60,
    h: 100,
    x: 270,
    y: 400
  },
  {
    w: 160,
    h: 100,
    x: 70,
    y: 400
  },
  {
    w: 60,
    h: 100,
    x: 270,
    y: 400
  },

  {
    w: 260,
    h: 20,
    x: 70,
    y: 530
  }
];

// The setup function is called once at the beginning
function setup() {
  createCanvas(400, 600);
  background(255);

  drawHouse();

  // Use a loop to automatically draw each window
  // let i = 0 : initialization of the counting variable and setting the start valaue to 0
  // i < 8: break conditon for the loop's duration
  // i = i + 1: the incrementation method (could have been i = i + 5 every round), schrittweite 
  //for (let i = 0; i < 8; i = i + 1) {
  //drawWindow(windows[i])
  //}

  // in case the length of an array is not known, the .length method can be used to get the number of the array's entrys (indexes)
  for (let i = 0; i < windows.length; i = i + 1) {
    drawWindow(windows[i])
  }
}


// my own functions are defined here. BUT they have to be called in setup or draw in order to be executed!
function drawWindow(windowObject) {
  fill(200, 0, 200)
  rect(windowObject.x, windowObject.y, windowObject.w, windowObject.h)
}

function drawHouse() {
  let house = {
    w: 300,
    h: 500,
    x: 50,
    y: 100
  }

  fill(200);
  noStroke();
  rect(house.x, house.y, house.w, house.h)
  fill(150, 100, 20);
  triangle(house.x, house.y, width / 2, 0, house.x + house.w, house.y);
}