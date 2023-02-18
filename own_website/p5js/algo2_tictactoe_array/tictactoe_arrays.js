// fairytale guessing game based on a tic, tac, toe layout in randomly beautiful colors ;).
// arrays (and objects)

const container2= document.getElementById('containerforalgo2')

function algorithm2(sketch) {

  // 9 words of 4 different fairytales are stored in 4 arrays which are then stored in 1 superordinate array

  let choiceOfWords = [['Schnee', 'Verwandlung', 'Superlativ', 'Sterben', 'Küssen', 'Flucht', 'Berge', 'WG', 'Jäger'],

['Kissen', 'Prinz', 'Schlaf', 'Gefühl', 'Hülsenfrucht', 'Sturm', 'Ehe', 'Autentizität', 'Genervt'],

['Schuhwerk', 'Haustier', 'Reise', 'Rebhuhn', 'See', 'Müller', 'Riese', 'Zaubertrick', 'Ehe'],

['Wand', 'Zauber', 'Kuss', 'Gold', 'Wasser', 'Spielen', 'Liebelei', 'Prinzessin', 'Grün']
  ]

  // function setup whre the visual part is drawn
  sketch.setup = function() {

    const containerSize = container2.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())

    // background radial gradient is taken from: https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/conical_gradient/sketch.js

    sketch.angleMode(sketch.DEGREES);
    sketch.colorMode(sketch.HSB, 360, 100, 100, 100);
    sketch.radialGradient(
      sketch.width / 2 - 40, sketch.height / 2 - 120, 0,//Start pX, pY, start circle radius
      sketch.width / 2 - 40, sketch.height / 2 - 120, sketch.width * 2 / 3,//End pX, pY, End circle radius
      sketch.color(230, 50, 94, 100), //Start inner color 
      sketch.color(135, 50, 94, 100), //End outer color
    );

    sketch.rect(0, 0, sketch.width, sketch.height)

    // text styling
    sketch.textSize(37);
    sketch.textAlign(sketch.CENTER); // hier auch sketch.?

    sketch.drawGrid();

    // counting variable for superordinate array
    let chooseFairytale = sketch.int(sketch.random(0, 4)); // random is a float by default and has to be converted to an integer first 

    // counting variable for the 9 words array
    let j = 0;

    sketch.noStroke(); // this style choice is needed only one time is therefore positioned outside the nested for loop
    // nested loop. zuerst wurde der x value zusammengefasst. als zweites wurde der y value zusammengefasst. deswegen zeichnet das script erst in x richtung und danach in y richtung, von wo wieder erst alles schritte in x richtung ausgeführt werden. 
    for (let y = sketch.height / 3 / 2; y < sketch.height; y = y + sketch.height / 3) {
      for (let x = sketch.width / 3 / 2; x < sketch.width; x = x + sketch.width / 3) {
        sketch.fill(sketch.random(0, 255), sketch.random(0, 255), sketch.random(0, 255));
        sketch.text(choiceOfWords[chooseFairytale][j], x, y);
        j = j + 1;
      }
    }

  }

  // --- end setup function ---

  // declaration of needed functions, which are called in function setup

  sketch.drawGrid = function() {
      sketch.colorMode(sketch.RGB);
    // x = schleifenvariable, die mit jedem durchlauf verändert werden soll
    for (let x = sketch.width / 3; x < sketch.width; x = x + sketch.width / 3) {
      sketch.strokeWeight(10)
      sketch.stroke(255, 255, 255, 70)
      sketch.line(x, 0, x, sketch.height)
    }

    // y = schleifenvariable, die mit jedem durchlauf verändert werden soll
    for (let y = sketch.height / 3; y < sketch.height; y = y + sketch.height / 3) {
      sketch.line(0, y, sketch.width, y)
    }
  }


  sketch.radialGradient = function (sX, sY, sR, eX, eY, eR, colorS, colorE) {
    let gradient = sketch.drawingContext.createRadialGradient(
      sX, sY, sR, eX, eY, eR
    );
    gradient.addColorStop(0, colorS);
    gradient.addColorStop(1, colorE);

    sketch.drawingContext.fillStyle = gradient;
    }
  return sketch;
}

new p5(algorithm2, container2)

// syntax for new p5 () function. p5 (sketch, node)
//  sketch is an object, which contains a function containing a p5.js sketch
//  node is a String or Object: containing ID or pointer to HTML DOM node to contain a sketch in












