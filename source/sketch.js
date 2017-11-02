var canvas;
var ctx;
var startGrad1, endGrad1, startGrad2, endGrad2;
var sizeRect = 100;
var gradientMovement = 0;

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.class("lemon");
	ctx = canvas.drawingContext;
}

function draw() {

	gradientMovement = gradientMovement+1;

	if (gradientMovement>800) {
			gradientMovement = 0;
	}

	var xRect = 0;
	var yRect = 0;

	var rotation1 = map(gradientMovement/gradientMovement, 0, 200, 0, sizeRect);
	var rotation2 = map(-gradientMovement, 0, 200, 0, sizeRect);
	var location = map(600, 0, 200, 0, sizeRect);

	startGrad1 = createVector(xRect + rotation1 + location, yRect + sizeRect - rotation2 - location);
	endGrad1 = createVector(xRect + sizeRect - rotation1 - location, yRect + rotation2 + location);

	//rectangle
	var gradient = ctx.createLinearGradient(startGrad1.x, startGrad1.y, endGrad1.x, endGrad1.y);
	gradient.addColorStop(0, "#E38DAB");
	gradient.addColorStop(1, "#2B0FDA");

	ctx.fillStyle = gradient;
	ctx.fillRect(xRect, yRect, windowWidth, windowHeight);

}

function windowResized() {

  resizeCanvas(windowWidth, windowHeight);
}
