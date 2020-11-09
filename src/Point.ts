export class Point {
  x: number;
  y: number;

  constructor();
  constructor(x: number, y: number); 
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  toString(): string {
    return `(${this.x}, ${this.y})`
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

    let inputX = x;
    let inputY = y;

    if (x instanceof Point) {
      const coordinates = x.toString().replace(/\(/, '').replace(/\)/, '');
      inputX = coordinates.split(',')[0];
      inputY = coordinates.split(',')[1];
    }

    const diffX = this.x - inputX;
    const diffY = this.y - inputY;
  
    return Math.round(Number(Math.sqrt(
      (diffX * diffX) + (diffY * diffY)
    ).toFixed(1)))
  }
}
