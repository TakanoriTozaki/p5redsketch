var bg;
var y = 0;

function setup() {
	// The background image must be the same size as the paremeters
	// into the createCanvas() method. In this program, the size of
	// the image is 720*360 pixels.
	bg = loadImage("assets/luka.jpg");
	createCanvas(720, 360);
}

function draw() {
	background(bg);

	stroke(266, 204, 0);
	line(0, y, width, y);

	y++;
	if (y > height) {
		y = 0;
	}
}
