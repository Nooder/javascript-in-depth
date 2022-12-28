/*
    1. Copy your code over from your exercise-2 solution.

    2. Add another class called "Circle" that extends
       the "Shape" class.
    
    3. The "Circle" constructor will have two parameters:
       - colour
       - radius
       Call the super constructor with "colour"
       Assign "radius" to the instance of "Circle"
       Assign "Circle" to the "type" property

    4. Add an "area" method to "Circle" that will calculate
       and return the total area of the circle.
       (Area of a circle is: pi * radius * radius )
       * Lookup how to get the value for "pi" on Google/MDN

    5. Add a method to "Circle" called "describe" that
       will log out the following to the console:
       "A round and awesome ${this.colour} ${this.type}"

    6. Run the following code and explain it in as much
       technical detail as you can:
       const square = new Square("blue", 5);
       const rectangle = new Rectangle("red", 5, 6);
       const circle = new Circle("green", 3);
       console.log( square.area() ); // 25
       console.log( rectangle.area() ); // 30
       console.log( circle.area() ); // 28.27433
       for ( const shape of [square, rectangle, circle] ) {
        shape.describe();
       }
       // A blue square
       // A red rectangle
       // A round and awesome green circle
*/

class Shape {
  type = "Shape";

  constructor(colour = "Transparent") {
    this.colour = colour;
    //  this.type = "Shape";
  }

  describe() {
    console.log(`A ${this.colour} ${this.type}`);
  }
}

class Square extends Shape {
  constructor(colour, sideLength = 2) {
    super(colour);
    // this.colour = colour;
    this.sideLength = sideLength;
    this.type = "Square";
  }

  area() {
    return this.sideLength * this.sideLength;
  }
}

class Rectangle extends Shape {
  constructor(colour, width, height) {
    super(colour);
    this.width = width;
    this.height = height;
    this.type = "Rectangle";
  }

  area() {
    return this.width * this.height;
  }
}

class Circle extends Shape {
  type = "Circle";
  constructor(colour, radius) {
    super(colour);
    this.radius = radius;
    //  this.type = "Circle";
  }

  area() {
    // pi * r^2
    return Math.PI * this.radius ** 2;
  }

  describe() {
    console.log(`A round and awesome ${this.colour} ${this.type}`);
  }
}

const square = new Square("blue", 5);
const rectangle = new Rectangle("red", 5, 6);
const circle = new Circle("green", 3);
console.log(square.area()); // 25
console.log(rectangle.area()); // 30
console.log(circle.area()); // 28.27433
for (const shape of [square, rectangle, circle]) {
  shape.describe();
}
// A blue square
// A red rectangle
// A round and awesome green circle
