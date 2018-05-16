function setup() {
	createCanvas(720,400, WEBGL);
}

function draw() {
	background(100);
	noStroke();

	push();
	translate(-300, 200);
	rotateY(1.75);
	rotateX(-0.9);
	box(100)
	pop();

	noFill()
	stroke(255);
	push();
	translate(200, height*0.15, -200);
	sphere(200);
	pop();
}
