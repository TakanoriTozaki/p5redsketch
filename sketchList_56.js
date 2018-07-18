var noseVal;
var noiseScale = 0.02;

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(0);
  // Draw the left half of image
  for (var y = 0; y < height-30; y++) {
    for (var x = 0; x < width/2; x++) {
      // noiceDetail of the pixels octave cout and falloff value
      noiseDetail(2,0,2);
      noiseVal = noise((mouseX+x) * noiseScale, (mouseY+y) * noiseScale);
      stroke(noiseVal*255);
      point(x,y);
    }
  }
  // Draw the right half of image
  for (var y = 0; y < height-30; y++) {
    for (var x = width/2; x < width; x++) {
      // noiceDetail of the pixels octave cout and falloff value
      noiseDetail(5,0,5);
      noiseVal = noise((mouseX+x) * noiseScale, (mouseY+y) * noiseScale);
      stroke(noiseVal*255);
      point(x,y);
    }
  }
  //Show the details of two partitions
  textSize(12);
  fill(255,255,255);
  text("Noise2D width 2 octaves and 0.2 falloff", 10, 350);
  text("Noise2D width 1 octaves and 0.7 falloff", 330, 350);
}
