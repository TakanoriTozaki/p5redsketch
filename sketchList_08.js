var pg;

function setup() {
  createCanvas(710, 400);
  pg = createGraphics(400, 250);
}

function draw() {
  // 塗りは半透明
  fill(0, 12);
  // 画面の大きさ
  rect(0, 0, width, height);
  // 塗りは白
  fill(255);
  // 線は描かない
  noStroke();
  // 円を描く
  ellipse(mouseX, mouseY, 60, 60);

  // 色はグレー
  pg.background(51);
  // 塗りは無し
  pg.noFill();
  // 線の色は白
  pg.stroke(255);
  // 円を描く枠線のみ
  pg.ellipse(mouseX-150, mouseY-75, 60, 60);

  // createCanvasの画面の大きさ
  image(pg, 150, 75);
}
