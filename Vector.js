var Vector = function(x, y) {
  this.x = x || 0;
  this.y = y || 0;
};

// return the angle of the vector in radians
Vector.prototype.getDirection = function() {
	return Math.atan2(this.y, this.x);
};

// set the direction of the vector in radians
Vector.prototype.setDirection = function(direction) {
	var magnitude = this.getMagnitude();
  this.x = Math.cos(direction) * magnitude;
  this.y = Math.sin(direction) * magnitude;
};

// get the magnitude of the vector
Vector.prototype.getMagnitude = function() {
	// use pythagoras theorem to work out the magnitude of the vector
	return Math.sqrt(this.x * this.x + this.y * this.y);
};

Vector.prototype.getSquaredMagnitude = function() {
  return this.x * this.x + this.y * this.y;
};

// set the magnitude of the vector
Vector.prototype.setMagnitude = function(magnitude) {
	var direction = this.getDirection(); 
	this.x = Math.cos(direction) * magnitude;
	this.y = Math.sin(direction) * magnitude;
};

// add two vectors together and return a new one
Vector.prototype.add = function(v2) {
	return new Vector(this.x + v2.x, this.y + v2.y);
};

// add a vector to this one
Vector.prototype.addTo = function(v2) {
	this.x += v2.x;
  this.y += v2.y;
};

// add a scaled vector to this one
Vector.prototype.addScaledTo = function(v2, k) {
  this.x += v2.x * k;
  this.y += v2.y * k;
};

// subtract two vectors and reutn a new one
Vector.prototype.subtract = function(v2) {
	return new Vector(this.x - v2.x, this.y - v2.y);
};

// subtract a vector from this one
Vector.prototype.subtractFrom = function(v2) {
	this.x -= v2.x;
  this.y -= v2.y;
};

// multiply this vector by a scalar and return a new one
Vector.prototype.multiply = function(scalar) {
  return new Vector(this.x * scalar, this.y * scalar);
};

// multiply this vector by the scalar
Vector.prototype.multiplyBy = function(scalar) {
  this.x *= scalar;
  this.y *= scalar;
};

// scale this vector by scalar and return a new vector
Vector.prototype.divide = function(scalar) {
  return new Vector(this.x / scalar, this.y / scalar);
};

// scale this vector by scalar
Vector.prototype.divideBy = function(scalar) {
  this.x /= scalar;
  this.y /= scalar;
};

Vector.prototype.distanceTo = function(v2) {
  var dx = v2.x - this.x;
  var dy = v2.y - this.y;
  return Math.sqrt(dx * dx + dy * dy);
}

// Aliases
Vector.prototype.getLength = Vector.prototype.getMagnitude;
Vector.prototype.setLength = Vector.prototype.setMagnitude;

Vector.prototype.getAngle = Vector.prototype.getDirection;
Vector.prototype.setAngle = Vector.prototype.setDirection;

// Utilities
Vector.prototype.copy = function() {
  return new Vector(this.x, this.y);
};

Vector.prototype.toString = function() {
  return 'x: ' + this.x + ', y: ' + this.y;
};

Vector.prototype.toArray = function() {
  return [this.x, this.y];
};

Vector.prototype.toObject = function() {
  return {x: this.x, y: this.y};
};

Vector.prototype.isZero = function() {
  return this.x === 0 && this.y === 0;
};

Vector.prototype.limitMagnitude = function(l) {
  var direction = this.getDirection(); 
  var magnitude = Math.min(this.getMagnitude(), l);
  return new Vector(Math.cos(direction) * magnitude, Math.sin(direction) * magnitude);
}