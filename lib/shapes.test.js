// Import the Shape class
const Shape = require('./Shape');

// Describe the test suite for the Shape class
describe('Shape', () => {
    // Test for rendering a Circle
    test('renders a Circle with the specified color', () => {
        const color = 'red';
        const shape = new Shape(color);
        const expectedSvg = `<circle cx="110" cy="110" r="80" fill="red"/>`;
        expect(shape.renderShape('Circle')).toBe(expectedSvg);
    });

    // Test for rendering a Triangle
    test('renders a Triangle with the specified color', () => {
        const color = 'blue';
        const shape = new Shape(color);
        const expectedSvg = `<polygon points="110,3 220,182 5,182" fill="blue"/>`;
        expect(shape.renderShape('Triangle')).toBe(expectedSvg);
    });

    // Test for rendering a Square
    test('renders a Square with the specified color', () => {
        const color = 'green';
        const shape = new Shape(color);
        const expectedSvg = `<rect width="200" height="200" x="10" y="10" fill="green"/>`;
        expect(shape.renderShape('Square')).toBe(expectedSvg);
    });

    // Test for handling an invalid shape type
    test('throws an error for an invalid shape type', () => {
        const color = 'purple';
        const shape = new Shape(color);
        expect(() => {
            shape.renderShape('Hexagon');
        }).toThrow('Invalid shape type');
    });
});
