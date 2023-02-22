let Colours = [];

//Returns colours

function getColour(r, g, b) {
  const R = floor(r / 8) * 8;
  const G = floor(g / 8) * 8;
  const B = floor(b / 8) * 8;
  return color(R, G, B);
}

//Create an array for the colours to use in the image

function generate() {
  Colours = [];

  while (Colours.length < 32768) {
    let r = floor(random(32)) * 8;
    let g = floor(random(32)) * 8;
    let b = floor(random(32)) * 8;
    
    let c = getColour(r, g, b);
    
    if (!Colours.includes(c)) {
      Colours.push(c);
    }
  }
}

//Canvas dimensions set to ensure all colours fit 

function setup() {
  createCanvas(256, 128);
  noStroke();
  generate();
}


//Colour each pixel with the unique colour taken from the array. 

function draw() {
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      let index = y * width + x;
      fill(Colours[index]);
      rect(x, y, 1, 1);
    }
  }
 
    generate();
  
}
