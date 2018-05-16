function setup() {
 createCanvas(720,400);
 background(51);
 noStroke();
 noLoop();
}

function draw() {
 drawCircle(width/2, 280, 6);
}

function drawCircle(x, radius, level) {
	var tt = 122 * level/4.0;
	fill(tt);
	ellipse(x, height/2, radius*2, radius*2);
	if (level > 1) {
		level = level - 1;
		drawCircle(x - radius/2, radius/2, level);
		drawCircle(x + radius/2, radius/2, level);
	}
}
