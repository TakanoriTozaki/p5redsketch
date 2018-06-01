function setup() {
	var d = 70;
	var p1 = d;
	var p2 = p1+d;
	var p3 = p2+d;
	var p4 = p3+d;

	createCanvas(720, 400);
	// 背景は黒で
	background(0);
	noSmooth();

	translate(140, 0);

	// 白い線の四角形を描く
	stroke(153);
	line(p3, p3, p2, p3);
	line(p2, p3, p2, p2);
	line(p2, p2, p3, p2);
	line(p3, p2, p3, p3);

	// 白い点を描く
	stroke(255);
	point(p1, p1);
	point(p1, p3);
	point(p2, p4);
	point(p3, p1);
	point(p4, p2);
	point(p4, p4);
}
