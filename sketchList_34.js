var img;
var smallPoint, largePoint;

function preload() {
	img = loadImage("assets/luka.jpg");
}

function setup() {
	createCanvas(720, 360);
	smallPoint = 4;
	largePoint = 40;
	imageMode(CENTER);
	noStroke();
	background(255);
	img.loadPixels();
}

function draw() {
	var pointllize = map(mouseX, 0, width, smallPoint, largePoint);
	var x = floor(random(img.width));
	var y = floor(random(img.height));
	var pix = img.get(x, y);
	fill(pix, 128);
	ellipse(x, y, pointllize, pointllize);
}
