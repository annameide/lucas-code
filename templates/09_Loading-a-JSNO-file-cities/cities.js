// I am sorry I had no ressources for a more creative output. 

/// <reference path="./p5.d.ts" />
// Here are the docs for P5.js: https://p5js.org/reference/

// the url path to the json file is saved as a string to the let jsonURL variable
let jsonURL = "https://gist.githubusercontent.com/ans2human/89f78752e161219060257b160f970fcd/raw/50d755da33db30ecb533d1770d94f9adcc8d6892/world_cities.json"

// a global variable is declared and set to expect an array. BUT the array is filled with contents only later in the algorithmic process.
let jsonContents = [];

let FRAMERATE = 30;
let maxPopulation = 35676000


function setup() {
  createCanvas(windowWidth, 10000);

  // First, we load the file
  loadJSONFile(jsonURL) // function(input)
  colorMode(RGB)
  noStroke()
  frameRate(FRAMERATE)
}




function draw() {
  // If our json file hasn't been loaded yet, we skip the function by returning nothing
  if (jsonContents.length === 0) {
    textSize(32);
    text("Loading...", 40, 40)
    return
  }
  // The return statement ends function execution and specifies a value to be returned to the function caller. 


  // OPEN YOU CONSOLE TO SEE THE DATA
  // go in json file / go into array / go into first array object, go to population property, take population value, map value to a drawable range, use this value as d in circle

  background("green")
  textSize(16);
  let jsonLength = jsonContents.length;
  let spaceBetweenEllipses = 200;

  for (let i = 0; i < jsonLength; i++) {
    fill("white")
    text(jsonContents[i].city, 280, 110 + i * spaceBetweenEllipses)
    text(jsonContents[i].population, 380, 110 + i * spaceBetweenEllipses)
    let blue = map(jsonContents[i].population, 0, maxPopulation, 255, 0)
    let diameter = map(jsonContents[i].population, 0, maxPopulation, 10, 200)
    fill(50, 50, blue); // += je mehr, um so dunkler. 0 = schwarz, 255 = weiss 
    ellipse(140, 110 + i * spaceBetweenEllipses, diameter)
  }

  // Replace from here with your own code
  //background("green")
  // fill("white")
  // textSize(16);
  // let textContent = JSON.stringify(jsonContents, null, 20)
  // text(textContent, 40, 40)
  // text(str, x, y, [x2] (width), [y2] (height))
  // but here text(str, x, y)
  // text (JSON.stringify(value, replacer (, --> ; // null = do not do anything), space (= indentation)), 40, 40)
  console.log(jsonLength);
  noLoop()
  // Until here‚
}



// This is advanced. Ingnore if needed.
// We define an asynchronouse function, meaning
// it will not stop the execution of the program

// why is the loadJSONFile input () called "path" and not "jsonURL": 
// The loadJSONFile function stores the jsonURL content in the new path variable. This is because the path variable is ought to be used ONLY in this function. 


async function loadJSONFile(path) {
  // We pause the execution of the loadJSONFile function
  // Until the fetch function has finish executing
  // This is made with the await keyword
  // And we save the result of fetch into the let response
  let response = await fetch(path)
  // We wait until the response is parsed into a JSON
  // format and we save the result in a let json
  let json = await response.json()
  jsonContents = json // We override our global variable jsonContents with the results
  console.log(jsonContents) // We log the results for convenience
}

// await and fetch are both built in JavaScript functions. It means they are saved in the browser and can just be used by me by typing the magic word "await". I do not need to write this function by myself. 
