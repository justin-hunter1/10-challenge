// class declarations
class Shape {
    constructor(shapecolor) {
        this.shapecolor = shapecolor;
    }
    setColor(color) {
        this.shapecolor = color;
    }
    textColor(textcolor) {
        this.textcolor = textcolor;
    }
    text(text) {
        this.text = text;
    }
}

class Circle extends Shape {
    constructor(shapecolor, textcolor, text) {
        super(shapecolor);
        this.textcolor = textcolor;
        this.text = text;
    }
// generate SVG file from response provide
    render() {
        return `<?xml version="1.0" standalone="no"?>\n<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<circle cx="150" cy="120" r="70" fill="${this.shapecolor}" />\n<text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textcolor}">${this.text}</text></svg>`;
    }
}

class Square extends Shape {
    constructor(shapecolor, textcolor, text) {
        super(shapecolor);
        this.textcolor = textcolor;
        this.text = text;
    }
// generate SVG file from response provide
    render() {
        return `<?xml version="1.0" standalone="no"?>\n<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<rect x="100" y="70" width="100" height="100" fill="${this.shapecolor}" />\n<text x="150" y="130" text-anchor="middle" font-size="40" fill="${this.textcolor}">${this.text}</text></svg>`;
    }
}

class Triangle extends Shape {
    constructor(shapecolor, textcolor, text) {
        super(shapecolor);
        this.textcolor = textcolor;
        this.text = text;
    }
// generate SVG file from response provide
    render () {
        return `<?xml version="1.0" standalone="no"?>\n<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">\n<polygon points="200,10 250,190 150,190" fill="${this.shapecolor}" />\n<text x="200" y="150" text-anchor="middle" font-size="40" fill="${this.textcolor}">${this.text}</text></svg>`;
    }
    
}

module.exports = { Circle, Square, Triangle };