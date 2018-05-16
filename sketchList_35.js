var barWidth = 20;
var lastBar = -1;

function setup() {
	createCanvas(720, 400);
	colorMode(HSB, height, height, 100);
	noStroke();
	background(0);
}

function draw() {
	var whichBar = mouseX / barWidth;
	if (whichBar != lastBar) {
		var barX = whichBar * barWidth;
		fill(barX, mouseY, 66);
		rect(barX, 0, barWidth, height);
		lastBar = whichBar;
	}
}
