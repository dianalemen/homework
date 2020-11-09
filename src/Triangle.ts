import { Shape } from './Shape';
import { Point } from "./Point";

export class Triangle extends Shape {
    protected color: string;
    protected filled: boolean;
  
    constructor(fPoint: Point, sPoint: Point, tPoint: Point);
    constructor(fPoint: Point, sPoint: Point, tPoint: Point, color: string, filled: boolean);
    constructor(fPoint, sPoint, tPoint, color?, filled?) {
      super([fPoint, sPoint, tPoint], color, filled);
    }
  
    toString(): string {
      const [fPoint, sPoint, tPoint] = this.points;
      return (
        `Triangle[v1=(${fPoint.x, fPoint.y}),v2=(${sPoint.x, sPoint.y}),v3=(${tPoint.x, tPoint.y})]`
      );
    }
  
    getType(): string {
      const sides: number[] = this.points.map((current, i, arr) => {
        if (i === arr.length - 1) {
          return current.distance(arr[0].x, arr[0].y)
        }
  
        return current.distance(arr[i + 1].x, arr[i + 1].y);
      })

      const filteredSides: number = new Set(sides).size;

      if (filteredSides === 1) {
        return 'equilateral triangle';
      }

      if (filteredSides === 2) {
        return 'isosceles triangle';
      }

      return 'scalene triangle';
    }
}
