function setup() {
	createCanvas(720, 400);
	background(0);
	stroke(255);

	var b = false;
	var d = 20;
	var middle = width/2;

	for (var i = d; i <= width; i += d ) {

		if (i < middle) {
			b = true;
		} else {
			b = false;
		}

		if (b == true) {
			// Vartical line
			line(i, d, i, height-d);
		}

		if (b == false) {
			// Horizontal line
			line(middle, i - middle + d, width-d, i - middle + d);
		}
	}
}
