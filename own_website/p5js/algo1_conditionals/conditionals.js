// Conditionals
// Verwende Konditionen, um die Funktion `drawDay` oder `drawNight` die Variabel // `isNight` entsprenchend.

// Here are the docs for P5.js: https://p5js.org/reference/

const container1 = document.getElementById('containerforalgo1')

function algorithm1(sketch) {
    // declaration and initialisation of the isNight variable. 
    // for this example the variable is changed manually between true and false
    let isNight = true;

    //The setup function is called once at the beginning
  sketch.setup = function() {

    const containerSize = container1.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())

    sketch.background(255);

    // Decide to draw either the day or the night
    // based on the isNight variable
    // draw function is only needed if dynamic art is drawn
    if (isNight === true) {
      // here the function drawNight is called / executed
      sketch.drawNight();
    } else {
      sketch.drawDay();
    }
  }
    // here the function drawDay is defined. it is called in the if else conditional 
    // statement inside the setup function, which means a function can be called in 
    // another function. 

  sketch.drawDay = function() {
    sketch.background(0, 0, 150);
    sketch.fill("#ffd966");
    sketch.ellipse(sketch.width/2, 100, 100);
    sketch.text('is day', sketch.width/2 - 30, 30); 
  }

  sketch.drawNight = function() {
    sketch.background("#290C7D");
    sketch.fill(255);
    sketch.ellipse(sketch.width/2, 100, 100);
    sketch.text('is night', sketch.width/2 - 30, 30);
  }

  sketch.windowResized = function() {
    const containerSize = container1.getBoundingClientRect();
    sketch.resizeCanvas(containerSize.width, containerSize.height)

    sketch.background(255);

    // needs to be in the resize function also in order to be drawn again
    if (isNight === true) {
      sketch.drawNight();
    } else {
      sketch.drawDay();
    }
  }

  return sketch;
}

// this method tells the p5js script TO draw THE algorithm1 (art) INSIDE the variable container1,
// which is set to output in the div element id #containerforalgo1   

new p5(algorithm1, container1)

// syntax for new p5 () function. p5 (sketch, node)
//  sketch is an object, which contains a function containing a p5.js sketch
//  node is a String or Object: containing ID or pointer to HTML DOM node to contain a sketch in
