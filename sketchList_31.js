var img;
var offset = 0;
var easing = 1.0;

function setup() {
	createCanvas(720, 360);
	img = loadImage("assets/luka.jpg"); // load an image int the
}
function draw() {
	image(img, 0, 0); // Display at full opacity
	var dx = (mouseX-img.width/2) - offset;
	offset += dx * easing;
	tint(255, 127); // Display at half opacity
	image(img, offset, 0);
}
