// a variable is created
// the variable is filled with the html div element with the id #containerforalgo1
// this is the link between the js file and the html file. 
// by getting element by id the js script knows where to output the algorithm on the html site  
const container1 = document.getElementById('containerforalgo1')

function algorithm1(sketch) {
  let y = 0
  let firstRun = true

  sketch.setup = function() {
    const containerSize = container1.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())
  };

  sketch.draw = function() {
    sketch.noStroke()
    sketch.fill(255, 0, 0, 50)
    sketch.rect(0, 0, sketch.width, sketch.height);
    sketch.fill(0, 255, 0)
    sketch.ellipse(sketch.width / 2, y, 30)

    y += 1

    if (y > sketch.height) {
      y = 0
    }

    if (firstRun) {
      sketch.noLoop()
      firstRun = false
    }
  };

  sketch.windowResized = function() {
    y = 0
    const containerSize = container1.getBoundingClientRect();
    sketch.resizeCanvas(containerSize.width, containerSize.height)
  }

  return sketch;
}

// this method tells the p5js script TO draw THE algorithm1 (art) INSIDE the variable container1,
// which is set to output in the div element id #containerforalgo1   
 
new p5(algorithm1, container1)
// syntax for new p5 () function. p5 (sketch, node)
//  sketch is an object, which contains a function containing a p5.js sketch
//  node is a String or Object: containing ID or pointer to HTML DOM node to contain a sketch in
