// Declarations
const { Circle, Square, Triangle } = require("./lib/shapes.js");

// Test Cases
describe("Circle test", () => {
    test("test for a circle with a green background", () => {
      const shapes = new Circle();
      shapes.setColor("green");
      shapes.textColor("white");
      shapes.text("test");
      expect(shapes.render()).toEqual('<?xml version="1.0" standalone="no"?>\n<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="120" r="70" fill="green" />\n<text x="150" y="130" text-anchor="middle" font-size="40" fill="white">test</text></svg>`');
    });
});
  
  describe("Square test", () => {
    test("test for a square with a orange background", () => {
      const shapes = new Square();
      shapes.setColor("orange");
      shapes.textColor("white");
      shapes.text("test");
      expect(shapes.render()).toEqual('<?xml version="1.0" standalone="no"?>\n<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<rect x="100" y="70" width="100" height="100" fill="orange" />\n<text x="150" y="130" text-anchor="middle" font-size="40" fill="white">test</text></svg>');
    });
});

  describe("Triangle test", () => {
    test("test for a triangle with a blue background", () => {
      const shapes = new Triangle();
      shapes.setColor("blue");
      shapes.textColor("white");
      shapes.text("test");
      expect(shapes.render()).toEqual('<?xml version="1.0" standalone="no"?>\n<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<polygon points="200,10 250,190 150,190" fill="blue" />\n<text x="200" y="150" text-anchor="middle" font-size="40" fill="white">test</text></svg>');
    });
});
