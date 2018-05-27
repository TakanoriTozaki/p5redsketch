var y = 100;

function setup() {
  createCanvas(720, 400);
  // 線の色
  stroke(255);
  // １秒間に30回
  frameRate(30);
}

function draw() {
  //背景の色を黒
  background(0);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
