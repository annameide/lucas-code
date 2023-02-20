// I am sorry I had no ressources for a more creative output. 

// Here are the docs for P5.js: https://p5js.org/reference/


const container4 = document.getElementById('containerforalgo4')

function algorithm4(sketch) {
  // the url path to the json file is saved as a string to the let jsonURL variable
  let jsonURL = "https://gist.githubusercontent.com/ans2human/89f78752e161219060257b160f970fcd/raw/50d755da33db30ecb533d1770d94f9adcc8d6892/world_cities.json"
  // a global variable is declared and set to expect an array. BUT the array is filled with contents only later in the algorithmic process.
  let jsonContents = [];
  let FRAMERATE = 30;
  let maxPopulation = 35676000

  sketch.setup = function() {
    
    const containerSize = container4.getBoundingClientRect();
    const canvs = sketch.createCanvas(containerSize.width, containerSize.height);
    canvs.mouseOver(() => sketch.loop())
    canvs.mouseOut(() => sketch.noLoop())

    
    // First, we load the file
    sketch.loadJSONFile(jsonURL) // function(input)
    sketch.colorMode(sketch.RGB)
    sketch.noStroke()
    sketch.frameRate(FRAMERATE)
  }

  sketch.draw = function() {
    // If our json file hasn't been loaded yet, we skip the function by returning nothing
    if (jsonContents.length === 0) {
      sketch.textSize(32);
      sketch.text("Loading... Stay tuned ;)", 40, 80)
      return
    }
    // The return statement ends function execution and specifies a value to be returned to the function caller. 


    // OPEN YOU CONSOLE TO SEE THE DATA
    // go in json file / go into array / go into first array object, go to population property, take population value, map value to a drawable range, use this value as d in circle

    sketch.background("#F4F4F4")
    sketch.textSize(18);
    let jsonLength = jsonContents.length;
    let spaceBetweenEllipses = 240;

    for (let i = 0; i < jsonLength; i++) {
      sketch.fill("#3B393E")
      sketch.text(jsonContents[i].city, 380, 140 + i * spaceBetweenEllipses)
      sketch.text(jsonContents[i].population, 480, 140 + i * spaceBetweenEllipses)
      let blue = sketch.map(jsonContents[i].population, 0, maxPopulation, 255, 0)
      let diameter = sketch.map(jsonContents[i].population, 0, maxPopulation, 10, 200)
      sketch.fill(200, 0, 50); // += je mehr, um so dunkler. 0 = schwarz, 255 = weiss 
      sketch.ellipse(200, 140 + i * spaceBetweenEllipses, diameter)
    }

    sketch.noLoop()
  }

  // This is advanced. Ingnore if needed.
  // We define an asynchronouse function, meaning
  // it will not stop the execution of the program

  // why is the loadJSONFile input () called "path" and not "jsonURL": 
  // The loadJSONFile function stores the jsonURL content in the new path variable. This is because the path variable is ought to be used ONLY in this function. 

  sketch.loadJSONFile = async function(path) {
    // We pause the execution of the loadJSONFile function
    // Until the fetch function has finish executing
    // This is made with the await keyword
    // And we save the result of fetch into the let response
    let response = await fetch(path)
    // We wait until the response is parsed into a JSON
    // format and we save the result in a let json
    let json = await response.json()
    jsonContents = json // We override our global variable jsonContents with the results
    // console.log(jsonContents) // We log the results for convenience
  }

  // await and fetch are both built in JavaScript functions. It means they are saved in the browser and can just be used by me by typing the magic word "await". I do not need to write this function by myself. 
  return sketch;
}

new p5(algorithm4, container4)

// syntax for new p5 () function. p5 (sketch, node)
//  sketch is an object, which contains a function containing a p5.js sketch
//  node is a String or Object: containing ID or pointer to HTML DOM node to contain a sketch in
