var a = 0; // Create a global variable "a" of type Number
var b = 0; // Create a global variable "b" of type Number

function setup() {
	createCanvas(720, 400);
	stroke(255);
}

function draw() {
	background(0);

	a = a + 1; // Increment a with an interger
	b = b + 0.2; // Increment a with a float
	line(a, 0, a, height/2);
	line(b, height/2, b, height);

	if (a > width) {
		a = 0;
	}
	if (b > width) {
		b = 0;
	}
}
