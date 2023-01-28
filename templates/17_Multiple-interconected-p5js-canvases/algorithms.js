const container1 = document.getElementById('algorithm1')
const container2 = document.getElementById('algorithm2')
const container3 = document.getElementById('algorithm3')

function interconnectAlgoritms() {
  let lineVX = 0;
  let lineHY = 0;

  function setupForAllAlgorithms(sketch, container) {
    const boundingBox = container.getBoundingClientRect();
    sketch.createCanvas(boundingBox.width, boundingBox.height);
  }

  function windowResizedForAllAlgorithms(sketch, container) {
    lineVX = 0;
    lineHY = 0;
    const boundingBox = container.getBoundingClientRect();
    sketch.resizeCanvas(boundingBox.width, boundingBox.height)
  }

  function drawForAllAlgorithms(sketch, container) {
    sketch.background(0, 0, 255)
    sketch.strokeWeight(2)
    sketch.stroke("yellow")

    const boundingBox = container.getBoundingClientRect();
    let x = lineVX - boundingBox.left
    let y = lineHY - boundingBox.top
    sketch.line(x, 0, x, sketch.height)
    sketch.line(0, y, sketch.width, y)
  }

  function algorithm1(sketch) {
    sketch.setup = function() {
      setupForAllAlgorithms(sketch, container1)
    };

    sketch.draw = function() {
      drawForAllAlgorithms(sketch, container1)
    };

    sketch.windowResized = function() {
      windowResizedForAllAlgorithms(sketch, container1)
    }

    return sketch;
  }

  function algorithm2(sketch) {
    sketch.setup = function() {
      setupForAllAlgorithms(sketch, container2)
    };

    sketch.draw = function() {
      drawForAllAlgorithms(sketch, container2)
    };

    sketch.windowResized = function() {
      windowResizedForAllAlgorithms(sketch, container2)
    }

    return sketch;
  }

  function algorithm3(sketch) {
    sketch.setup = function() {
      setupForAllAlgorithms(sketch, container3)
    };

    sketch.draw = function() {
      drawForAllAlgorithms(sketch, container3)

      // One of the 3 algorithms takes care of augmenting the position
      lineHY = lineHY + 5
      lineVX += 6

      if (lineHY > window.innerHeight) {
        lineHY = 0
      }

      if (lineVX > window.innerWidth) {
        lineVX = 0
      }
    };

    sketch.windowResized = function() {
      windowResizedForAllAlgorithms(sketch, container3)
    }

    return sketch;
  }

  new p5(algorithm1, container1)
  new p5(algorithm2, container2)
  new p5(algorithm3, container3)
}

interconnectAlgoritms()