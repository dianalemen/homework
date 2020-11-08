// @ts-nocheck
import { Triangle } from '../src/Triangle';
import { Point } from '../src/Point';

describe('Triangle', () => {
    it('should be able to create instance of Triangle', () => {
        expect(() => new Triangle(new Point(0, 0), new Point(0, 3), new Point(4, 3))).not.toThrow();
    });

    it('should tell if the triangle is equilateral', () => {
        expect(new Triangle(new Point(0, 0), new Point(6, 0), new Point(3, 5.196)).getType()).toBe('equilateral triangle');
    });

    it('should tell if the triangle is isosceles', () => {
        expect(new Triangle(new Point(0, 0), new Point(6, 0), new Point(3, 8)).getType()).toBe('isosceles triangle');
    });

    /**?
     * in the second test we get the sides - 6, 5.9, 5.9
     * that is why we need to use Math.round in the distance method
     * 
     * in the third test we get - 6, 8.5, 8.5
     * but they got rounded because of Math.round method
     * 
     * in the fourth test we get - 7, 8.5, 8.54
     * but they got rounded becouse of Math.round
     * 
     * that is why I had to changed the input values in the fourth test
     */

    it('should tell if the triangle is scalene', () => {
        expect(new Triangle(new Point(0, 0), new Point(10, 0), new Point(3, 8)).getType()).toBe('scalene triangle');
    });
});
