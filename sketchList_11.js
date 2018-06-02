var angles = [ 30, 10, 45, 35, 60, 38, 75, 67 ];

function setup() {
	createCanvas(720, 400);
	noStroke();
	noLoop();
}

function draw() {
	background(100);
	pieChart(300, angles);
}

function pieChart(diameter, data) {
	var lastAngles = 0;
	for (var i = 0; i < data.length; i++) {
		var gray = map(i, 0, data.length, 0, 255);
		fill(gray);
		arc(width/2, height/2, diameter, diameter, lastAngles, lastAngles+radians(angles[i]));
		lastAngles += radians(angles[i]);
	}
}
