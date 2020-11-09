export class Point {
  x: number;
  y: number;
  point: string;

  constructor();
  constructor(x: number, y: number); 
  constructor(x?, y?) {
    this.x = x !== undefined ? x : 0;
    this.y = y !== undefined ? y : 0;
    this.point = `${this.x}, ${this.y}`;
  }

  toString(): string {
    return `(${this.point})`
  }

  distance();
  distance(x: number | Point, y: number);
  distance(other: Point);
  distance(x?, y?) {
    if (x === undefined && y === undefined) {
      return Math.sqrt(
        (this.x * this.x) + ((this.y * this.y))
      )
    }

    const coordinates = x instanceof Point ? x.toString().replace(/\(/, '').replace(/\)/, '') : null;
    const inputX = Number(y !== undefined ? x : coordinates.split(',')[0]);
    const inputY = Number(y !== undefined? y : coordinates.split(',')[1]);
    const diffX = this.x - inputX;
    const diffY = this.y - inputY;
  
    return Math.round(Number(Math.sqrt(
      (diffX * diffX) + (diffY * diffY)
    ).toFixed(1)))
  }
}
