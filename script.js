//# p5.js - Konditionen
// Verwende Konditionen, um die Funktion `drawDay` oder `drawNight` die Variabel `isNight` entsprenchend.



// The line below adds autocompletion for p5.js which is very Helpful
/// <reference path="./p5.d.ts" />

// HELP: https://replit.com/@vogelino/P5js-Conditionals

// Here are the docs for P5.js: https://p5js.org/reference/
let isNight = false;

// The setup function is called once at the beginning
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  // Decide to draw either the day or the night
  // based on the isNight variable
  drawNight();
}

function draw() {
  
}


function drawDay() {
}

function drawNight() {
}
