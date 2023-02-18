// fairytale guessing game based on a tic, tac, toe layout in randomly beautiful colors ;).


// 9 words of 4 different fairytales are stored in 4 arrays which are then stored in 1 superordinate array
let choiceOfWords = [['Schnee', 'Verwandlung', 'Superlativ', 'Sterben', 'Küssen', 'Flucht', 'Berge', 'WG', 'Jäger'],

['Kissen', 'Prinz', 'Schlaf', 'Gefühl', 'Hülsenfrucht', 'Sturm', 'Ehe', 'Autentizität', 'Genervt'],

['Schuhwerk', 'Haustier', 'Reise', 'Rebhuhn', 'See', 'Müller', 'Riese', 'Zaubertrick', 'Ehe'],

['Wand', 'Zauber', 'Kuss', 'Gold', 'Wasser', 'Spielen', 'Liebelei', 'Prinzessin', 'Grün']
]

// function setup whre the visual part is drawn
function setup() {
  createCanvas(windowWidth, windowHeight);

  // background radial gradient is taken from: https://github.com/Creativeguru97/YouTube_tutorial/blob/master/p5_hacks/Gradient_effect/conical_gradient/sketch.js

  angleMode(DEGREES);
  colorMode(HSB, 360, 100, 100, 100);
  radialGradient(
    width / 2 - 40, height / 2 - 120, 0,//Start pX, pY, start circle radius
    width / 2 - 40, height / 2 - 120, width * 2 / 3,//End pX, pY, End circle radius
    color(230, 50, 94, 100), //Start inner color 
    color(135, 50, 94, 100), //End outer color
  );

  rect(0, 0, width, height)

  // text styling
  textSize(37);
  textAlign(CENTER);

  drawGrid();

  // circle (x, y, d)
  // the changing value is x
  //circle(width/3/2, height/3/2, width/3*60/100);
  //circle(width/3/2+width/3, height/3/2, width/3*60/100);
  //circle(width/3/2+width/3+width/3, height/3/2, width/3*60/100);

  // the changing value is y
  //for (let x = width/3/2; x < width; x = x + width/3) {
  //circle(x, height/3/2, width/3*60/100)
  //}

  //for (let x = width/3/2; x < width; x = x + width/3) {
  //circle(x, height/3/2 + height/3, width/3*60/100)
  //}

  //for (let x = width/3/2; x < width; x = x + width/3) {
  //circle(x, height/3/2 + height/3 + height/3, width/3*60/100)
  //}

  // counting variable for superordinate array
  let chooseFairytale = int(random(0, 4)); // random is a float by default and has to be converted to an integer first 

  // counting variable for the 9 words array
  let j = 0;

  noStroke(); // this style choice is needed only one time is therefore positioned outside the nested for loop
  // nested loop. zuerst wurde der x value zusammengefasst. als zweites wurde der y value zusammengefasst. deswegen zeichnet das script erst in x richtung und danach in y richtung, von wo wieder erst alles schritte in x richtung ausgeführt werden. 
  for (let y = height / 3 / 2; y < height; y = y + height / 3) {
    for (let x = width / 3 / 2; x < width; x = x + width / 3) {
      fill(random(0, 255), random(0, 255), random(0, 255));
      text(choiceOfWords[chooseFairytale][j], x, y);
      j = j + 1;
    }
  }

}

// --- end setup function ---

// declaration of needed functions, which are called in function setup

function drawGrid() {
  colorMode(RGB);
  // x = schleifenvariable, die mit jedem durchlauf verändert werden soll
  for (let x = width / 3; x < width; x = x + width / 3) {
    strokeWeight(10)
    stroke(255, 255, 255, 70)
    line(x, 0, x, height)
  }

  // y = schleifenvariable, die mit jedem durchlauf verändert werden soll
  for (let y = height / 3; y < height; y = y + height / 3) {
    line(0, y, width, y)
  }
}


function radialGradient(sX, sY, sR, eX, eY, eR, colorS, colorE) {
  let gradient = drawingContext.createRadialGradient(
    sX, sY, sR, eX, eY, eR
  );
  gradient.addColorStop(0, colorS);
  gradient.addColorStop(1, colorE);

  drawingContext.fillStyle = gradient;
}
