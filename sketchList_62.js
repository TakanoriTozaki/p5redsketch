function setup() {
  createCanvas(1000, 1000);
  background(200);
}

function draw() {
  // 色をセット
  fill(255);
  stroke(0);
  strokeWeight(2);
  // 矩形を描く
  rect(100, 100, 800, 800);
  // 矩形を描く
  rect(250, 250, 500, 500);
  //　円を描く
  ellipse(250, 250, 20, 20);
  ellipse(250, 750, 20, 20);
  ellipse(750, 750, 20, 20);
  ellipse(750, 250, 20, 20);
}
