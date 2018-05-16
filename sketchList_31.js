var img;
var offset = 0;
var easing = 0.05;

function setup() {
	createCanvas(720, 400);
	img = loadImage("mem.png"); // Load an image
}

function draw() {
	image(img, 0, 0); // Display at full opacity
	var dx = (mouseX-img.widht/2) - offset;
	offset += dx * easing;
	tint(255, 127); // Display at half opacity
	image(img, offset, 0);
}
