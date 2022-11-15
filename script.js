// Conditionals
// Verwende Konditionen, um die Funktion `drawDay` oder `drawNight` die Variabel // `isNight` entsprenchend.

// The line below adds autocompletion for p5.js which is very Helpful
// <reference path="./p5.d.ts" />

// HELP: https://replit.com/@vogelino/P5js-Conditionals
// Here are the docs for P5.js: https://p5js.org/reference/

// declaration and initialisation of the isNight variable. 
// for this example the variable is changed manually between true and false

let isNight = false;

// The setup function is called once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);

  // Decide to draw either the day or the night
  // based on the isNight variable
  // draw function is only needed if dynamic art is drawn
  if (isNight === true) {
    // here the function is called
    drawNight();
  } else {
    drawDay();
  }
}

// here the function drawDay is defined. it is called in the if else conditional // statement inside the setup function, which means a function can be called in 
// another function. 

function drawDay() {
  background(0, 0, 150);
  fill("#ffd966");
  ellipse(windowWidth/2, 100, 100);
  text('is day', windowWidth/2 - 30, 30);

}

function drawNight() {
  fill(255);
  ellipse(100, 100, 100);
  text('is night', 30, 30);
}
