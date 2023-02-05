const container2 = document.getElementById('containerforalgo2')

function algorithm2(sketch) {
  let x = 0
  let firstRun = true

  sketch.setup = function() {
    const containerSize = container2.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())
  };

  sketch.draw = function() {
    sketch.noStroke()
    sketch.fill(0, 255, 0, 50)
    sketch.rect(0, 0, sketch.width, sketch.height);
    sketch.fill(0, 0, 255)
    sketch.ellipse(x, sketch.height / 2, 30)

    x += 1

    if (x > sketch.width) {
      x = 0
    }

    if (firstRun) {
      sketch.noLoop()
      firstRun = false
    }
  };

  sketch.windowResized = function() {
    x = 0
    const containerSize = container2.getBoundingClientRect();
    sketch.resizeCanvas(containerSize.width, containerSize.height)
  }

  return sketch;
}

new p5(algorithm2, container2)