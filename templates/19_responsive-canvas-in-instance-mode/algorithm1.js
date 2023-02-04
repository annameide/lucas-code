const container1 = document.getElementById('algorithm1')

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

new p5(algorithm1, container1)