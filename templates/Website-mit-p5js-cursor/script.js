// Based on StackOverflow answer by Ian Hogers:
// https://stackoverflow.com/questions/48250639/making-an-object-move-toward-the-cursor-javascript-p5-js

let rectLocation;

function algorithm(sketch) {
  sketch.setup = function setup() {
    // create vector that keeps track of the location of the rect
    sketch.createCanvas(window.innerWidth, window.innerHeight)
    rectLocation = sketch.createVector(sketch.width / 2, sketch.height / 2);
    sketch.frameRate(60)
  }

  sketch.draw = function draw() {
    // Assign your mouseX and mouseY to a vector called target.
    const target = sketch.createVector(sketch.mouseX, sketch.mouseY);

    // Calculate the distance between your target and
    // the current location of your rect
    const distance = target.dist(rectLocation);

    // map the distance between your rect location and
    // the mouse to a new number which will dictate how
    // much slower it will move based on how close it
    // will get to the target.
    const mappedDistance = sketch.map(distance, 100, 0, 10, 0.5);

    // this is where you actually calculate the direction
    // of your target towards your rect.
    target.sub(rectLocation);

    // then you're going to normalize that value
    // (normalize sets the length of the vector to 1)
    target.normalize();

    // then you can multiply that vector by the distance
    // we mapped to a new number (in this case it gets
    // multiplied somewhere between 1.5 and 0.5 based
    // on how far the target is.)
    target.mult(mappedDistance);

    // last we add the target vector (which we modfied
    // multiple times) to the rect location.
    rectLocation.add(target);

    // draw and watch math do it's job!
    sketch.blendMode(sketch.ADD);
    sketch.background(255, 10)
    sketch.noStroke()
    sketch.fill("blue");
    sketch.blendMode(sketch.BLEND);
    sketch.ellipse(rectLocation.x, rectLocation.y, 30, 30);
  }

  sketch.windowResized = function windowResized() {
    sketch.resizeCanvas(window.innerWidth, window.innerHeight)
  }

  return sketch
}

const container = document.getElementById("cursor")
new p5(algorithm, container)