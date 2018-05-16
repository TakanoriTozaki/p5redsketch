var y;

function setup() {
 createCanvas(720,400);
 stroke(255);
 noLoop();

 y = height * 0.5;
}

function draw() {
 background(0);
 y = y - 1;
 if (y < 0){
	 y = height;
 }
 line(0, y, width, y);
}
