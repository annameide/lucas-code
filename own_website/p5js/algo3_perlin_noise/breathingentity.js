// the project is about a breathing entity or shape. let's say a breathing pillow or meditation assistant against loneliness. 
// perlin noise
// in this sketch I write the algorithm for the breathing curve


const container3 = document.getElementById('containerforalgo3')

function algorithm3(sketch){

  let d; // d is the diameter and it is the value that needs to change smoothly
  let d2;
  let button;
  let oneShape = true;

  sketch.setup = function() {

    const containerSize = container3.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())

    d = sketch.width / 10; // I give d a starting value once, because it can not begin with 0 (a 3d entity can not be 0 / nothing, have no volume at the beginning )
    button = sketch.createButton('alter shape');
    button.position(sketch.width / 2, sketch.height / 7);
    button.mousePressed(sketch.showOtherShapes);
    button.mouseOver(() => sketch.loop())
  }

  sketch.showOtherShapes = function() {

    oneShape = !oneShape;

  }

  // I use the function draw because the output needs to be animated
  sketch.draw = function() {

    if (oneShape === true) {
      sketch.breathe1();
    } else {
      sketch.breathe2();
    }


  }

  // the pillow shall be visually represented here through a cicrle(x,y,d)

  let i = 0; // I need a counting variable in order to calculate the noise values
  let j = 0;
  sketch.breathe1 = function() {
    sketch.noStroke()
    sketch.fill("white")
    sketch.background("blue");
    let x = sketch.width / 2;
    let y = sketch.height / 2;

    i = i + 0.005 // incrementation stepwidth of the incrementation variable. it needs to be small so it runs smoothly

    d = sketch.noise(i) // calculation of noise values
    d = sketch.map(d, 0, 1, sketch.width / 10, sketch.width) // the noise values are mapped on a broader range

    sketch.circle(x, y, d) // the circle is drawn with a smoothly changing value of d (diameter) 
  }

  sketch.breathe2 = function() {
    //blendMode(MULTIPLY); why does it not work?
    sketch.noStroke()
    sketch.fill(255, 0, 0, 200)

    sketch.background(0, 0, 255);
    let x1 = sketch.width / 2;
    let y1 = sketch.height / 2;

    let x2 = sketch.width / 3;
    let y2 = sketch.height * 1 / 3;
    i = i + 0.005 // incrementation stepwidth of the incrementation variable. it needs to be small so it runs smoothly
    j = j + 0.05;

    d = sketch.noise(i) // calculation of noise values
    d = sketch.map(d, 0, 1, sketch.width / 10, sketch.width) // the noise values are mapped on a broader range
    d2 = sketch.width / 10 * sketch.sin(j) + sketch.width / 5;
    sketch.circle(x1, y1, d) // the circle is drawn with a smoothly changing value of d (diameter) 
    sketch.circle(x2, y2, d2) // the circle is drawn with a smoothly changing value of d (diameter) 
  }

}

new p5(algorithm3, container3)







