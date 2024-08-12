// lib/shapes.js
class Shape {
    constructor(shapeType, color) {
        this.shapeType = shapeType;
        this.color = color;
    }

    render() {
        switch (this.shapeType) {
            case 'Circle':
                return `<circle cx="110" cy="110" r="80" fill="${this.color}"/>`;
            case 'Triangle':
                return `<polygon points="110,3 220,182 5,182" fill="${this.color}"/>`;
            case 'Square':
                return `<rect width="200" height="200" x="10" y="10" fill="${this.color}"/>`;
            default:
                throw new Error("Invalid shape type");
        }
    }
}

module.exports = Shape;
