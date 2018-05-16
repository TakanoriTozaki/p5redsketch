var bg;
var y = 0;

function setup() {
	// The background image must be the same size as the param
	// into the createCanvas() method. In this program, the size
	// the image is 720*400 pixels.
	bg = loadImage("mem.png");
	createCanvas(720, 400);
}

function draw() {
	background(bg);

	stroke(226, 204, 0);
	line(0, y, width, y);

	y++;
	if (y > height) {
		y = 0;
	}
}
