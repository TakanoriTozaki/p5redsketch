var y;

function setup() {
  createCanvas(720, 400);
  // 線の色は白
  stroke(255);
  // ループはさせない
  noLoop();

  y = height * 0.5;
}

function draw() {
  // 背景の色は黒
  background(0);
  y = y - 1;
  if (y < 0) { y = height; }
  // 線を描くyは動くwidthは720
  line(0, y, width, y);
}
