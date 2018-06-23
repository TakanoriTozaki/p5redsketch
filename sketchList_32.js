var img;
var imgMask;

function preload() {
	img = loadImage("assets/luka.jpg");
	imgMask = loadImage("assets/mask.png");
}

function setup() {
	createCanvas(720, 360);
	img.mask(imgMask);
	imageMode(CENTER);
}

function draw() {
	background(0, 102, 153);
	image(img, width/2, height/2);
	image(img, mouseX, mouseY);
}
