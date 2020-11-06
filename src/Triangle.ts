import { Shape } from './Shape';
import { Point } from "./Point";

export class Triangle extends Shape {
    protected color: string;
    protected filled: boolean;
    fPoint: Point;
    sPoint: Point;
    tPoint: Point;
  
    constructor(fPoint, sPoint, tPoint);
    constructor(fPoint, sPoint, tPoint, color, filled);
    constructor(fPoint: Point, sPoint: Point, tPoint: Point, color?: string, filled?: boolean) {
      super([fPoint, sPoint, tPoint]);
      this.fPoint = fPoint;
      this.sPoint = sPoint;
      this.tPoint = tPoint;
      this.color = color || 'green';
      this.filled = filled !== undefined ? filled : true;
    }
  
    toString(): string {
      return (
        `Triangle[v1=(${this.fPoint.x, this.fPoint.y}),v2=(${this.sPoint.x, this.sPoint.y}),v3=(${this.tPoint.x, this.tPoint.y})]`
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
