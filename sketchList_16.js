function setup() {
	createCanvas(720, 400, WEBGL);
}

function draw () {
	background(100);

	noStroke();
	fill(50);
	push();
	translate(-275, 175);
	rotate(1.25);
	rotate(-0.9);
	box(100);
	pop();

	noFill();
	stroke(255);
	push();
	translate(500, height*0.35, -200);
	sphere(300);
	pop();
}
