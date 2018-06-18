function setup() {
	createCanvas(720, 360);
	background(0);

	for (var i = 2; i < width-2; i += 4) {
		// if 'i' divides by 20 with no remainder
		if ((i % 20) == 0) {
			stroke(255);
			line(i, 80, i, height/2);
			// if 'i' divides by 10 with no remainder
		} else if ((i % 10) == 0) {
			stroke(153);
			line(i, 20, i, 180);
			// if neither of the above two coditions are met
			// then draw this line
		} else {
			stroke(102);
			line(i, height/2, i, height-20);
		}
	}
}
