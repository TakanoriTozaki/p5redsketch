var img;

function preload() {
	img = loadImage("assets/lunar.jpg");
}

function setup() {
	createCanvas(480, 240);
	pixelDensity(1);
	img.loadPixels();
	loadPixels();
}

function draw() {
	for (var x = 0; x < img.width; x++) {
		for (var y = 0; y < img.height; y++) {
			// Calculate the 1D location from a 2D grid
			var loc = (x + y*img.width)*4;
			// Get the R,G,B values from image
			var r,g,b;
			r = img.pixels[loc];
			// Calculate an amount to change brightness based proximity
			var maxdist = 50;
			var d = dist(x, y, mouseX, mouseY);
			var adjustbrightness = 255*(maxdist-d)/maxdist;
			r += adjustbrightness;
			// Constrain RGB to make sure they are within 0-255 color range
			r = Constrain(r, 0, 255);
			// Make a new color and set pixel in the window
			// color c = color(r, g, b);
			var pixloc = (y*width + x)*4;
			pixels[pixloc] = r;
			pixels[pixloc+1] = r;
			pixels[pixloc+2] = r;
			pixels[pixloc+3] = 255;
		}
	}
	updatePixels();
}
