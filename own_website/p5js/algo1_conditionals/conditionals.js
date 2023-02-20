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
    button = sketch.createButton('alter time');
    button.position(sketch.width/2-75, sketch.height /2+20);
    button.mousePressed(sketch.showOtherTime);
    button.mouseOver(() => sketch.loop())
  }
    // here the function drawDay is defined. it is called in the if else conditional 
    // statement inside the setup function, which means a function can be called in 
    // another function. 
    
    sketch.draw = function() {

      if (isNight === true) {
        // here the function drawNight is called / executed
        sketch.drawNight();
      } else {
        sketch.drawDay();
      }
  
    }

    sketch.showOtherTime = function() {
      isNight = !isNight;
    }


  sketch.drawNight = function() {
    sketch.background("#00003E");
    sketch.fill("#F1F0F2");
    sketch.noStroke();
    sketch.ellipse(sketch.width/2, 280, 300);

    sketch.fill("#F1F0F2");
    sketch.noStroke();
    sketch.ellipse(sketch.width/5, 80, 10);

    sketch.fill("#F1F0F2");
    sketch.noStroke();
    sketch.ellipse(600, 380, 8);

    sketch.fill("#F1F0F2");
    sketch.noStroke();
    sketch.ellipse(800, 100, 5);

    sketch.textSize(32);
    sketch.noStroke();
    sketch.text('It is night!', sketch.width/2 - 60, 80);
  }

  sketch.drawDay = function() {
    sketch.background("#A3C8FF");
    sketch.fill("#ffd966");
    sketch.noStroke();
    sketch.ellipse(sketch.width/2, 280, 300);

    sketch.textSize(32);
    sketch.text('It is day!', sketch.width/2 - 50, 80);

    sketch.stroke("#ffd966");
    sketch.strokeWeight(2);
    sketch.noFill(); 
    sketch.ellipse(sketch.width/2, 280, 330); 
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
