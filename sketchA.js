function setup() {
	createCanvas(100, 100, WEBGL);
}

function draw() {
	background(200);
	rotateX(frameCount * 0.01)
	rotateY(frameCount * 0.01)
	box(40);
	box(50, 50, 50);
}
