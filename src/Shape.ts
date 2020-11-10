import { Point } from "./Point";

export abstract class Shape {
  protected color: string;
  protected filled: boolean;
  points: Point[];

  constructor(points: Point[]);
  constructor(points: Point[], color?: string, filled?: boolean);
  constructor(points, color = 'green', filled = true) {

    if (points.length < 3) {
      throw 'Please, provide more than 3 points'
    }

    this.points = points;
    this.color = color;
    this.filled = filled;
  }

  toString(): string {
    const fill = this.filled ? 'filled' : 'not filled';
    const coordinates = this.points.map(point => point.toString()).join(', ');
    return `A Shape with color of ${this.color} and ${fill}. Points: ${coordinates}.`
  }

  getPerimeter(): number {
    return this.points.reduce((acc, current, i, arr) => {
      if (i === arr.length - 1) {
        return acc + current.distance(arr[0].x, arr[0].y)
      }

      return acc + current.distance(arr[i + 1].x, arr[i + 1].y);
    }, 0)
  }

  abstract getType(): string;
}
