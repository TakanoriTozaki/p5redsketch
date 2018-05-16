var font;

function preload() {
  font = loadFont('assets/AvenirNextLTPro-Demi.otf');
}

function setup() {
createCanvas(800,300);
background(51);
textFont(font);
textSize(128);
fill(255);
noStroke();
text('TidalCycles', 10, 50);
}

function draw() {
ellipse(50,50,100,100);
}
