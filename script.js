//# p5.js - Konditionen
// Verwende Konditionen, um die Funktion `drawDay` oder `drawNight` die Variabel `isNight` entsprenchend.

// The line below adds autocompletion for p5.js which is very Helpful
// <reference path="./p5.d.ts" />

// HELP: https://replit.com/@vogelino/P5js-Conditionals

// Here are the docs for P5.js: https://p5js.org/reference/
let isNight = true;

// The setup function is called once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(100);

  // Decide to draw either the day or the night
  // based on the isNight variable
  // draw function is only needed if dynamic art is drawn
  if (isNight === true){
    // here the function is called
    drawNight();
  } else {
    drawDay();
  }
}


// here the function is defined
function drawDay() {
  fill(255, 0, 0);
  ellipse(100, 100, 100);
  text('is day', 30, 30);
}

function drawNight() {
  fill(255);
  ellipse(100, 100, 100);
  text('is night', 30, 30);
}
