var r;
var r1;
var r2;

// Angle and angular veloctiy, accleration
var theta;
var theta_val;
var theta_acc;

function setup() {
  createCanvas(720, 360);

  // Initialize all values
  r = height * 0.02;
  r1 = height * 0.25;
  r2 = height * 0.45;
  theta = 0;
  theta_vel = 0;
  theta_acc = 0.01;
}

function draw() {

  background(0);

  // Tranlate the origin point to the center of the screen
  translate(width/2, height/2);

  // Convert polar to cartesian
  var x = r * cos(theta);
  var y = r * sin(theta);

  var x1 = r1 * cos(theta);
  var y1 = r1 * sin(theta);

  var x2 = r2 * cos(theta);
  var y2 = r2 * sin(theta);

  // Draw the ellipse at the cartesian coordinate
  ellipseMode(CENTER);
  noStroke();
  fill(200);
  ellipse(x, y, 32, 32);
  ellipse(x1, y1, 32, 32);
  ellipse(x2, y2, 32, 32);

  // Apply acceleration and velocity to angel
  // (r remains static in this example)
  theta_vel += theta_acc;
  theta += theta_vel;
}
