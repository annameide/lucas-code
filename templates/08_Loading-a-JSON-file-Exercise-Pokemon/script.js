/// <reference path="./p5.d.ts" />
// Here are the docs for P5.js: https://p5js.org/reference/
let jsonURL = "https://raw.githubusercontent.com/fanzeyi/pokemon.json/master/pokedex.json"
let jsonContents = [];
let FRAMERATE = 30

function setup() {
  createCanvas(windowWidth, windowHeight);

  // First, we load the file
  loadJSONFile(jsonURL)
  colorMode(HSL)
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

  // OPEN YOU CONSOLE TO SEE THE DATA
  // Replace from here with your own code
  background("green")
  fill("white")
  textSize(16);
  text(JSON.stringify(jsonContents, null, 2), 40, 40)
  noLoop()
  // Until here
}

// This is advanced. Ingnore if needed.
// We define an asynchronouse function, meaning
// it will not stop the execution of the program
async function loadJSONFile(path) {
  // We pause the execution of the loadJSONFile function
  // Until the fetch function has finish executing
  // This is made with the await keyword
  // An we save the result of fetch into the let response
  let response = await fetch(path)
  // We wait until the response is parsed into a JSON
  // format and we save the result in a let json
  let json = await response.json()
  jsonContents = json // We override our global variable jsonContents with the results
  console.log(jsonContents) // We log the results for convenience
}
