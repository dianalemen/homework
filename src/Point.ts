export class Point {
  x: number;
  y: number;
  point: string

  constructor();
  constructor(x: number, y: number); 
  constructor(x?: number, y?: number) {
    this.x = x;
    this.y = y;
    this.point = `${x || 0}, ${y || 0}`;
  }

  toString(): string {
    return `(${this.point})`
  }

  distance();
  distance(x, y);
  distance(other: Point);
  distance(x?: number | Point, y?: number) {
    if (x === undefined && y === undefined) {
      return Math.sqrt(
        (this.x * this.x) + ((this.y * this.y))
      )
    }

    const coordinates = x.toString().replace(/\(/, '').replace(/\)/, '');
    const inputX = Number(y !== undefined ? x : coordinates.split(',')[0]);
    const inputY = Number(y !== undefined? y : coordinates.split(',')[1] );
    const diffX = this.x - inputX;
    const diffY = this.y - inputY;
  
    return Math.round(Number(Math.sqrt(
      (diffX * diffX) + (diffY * diffY)
    ).toFixed(1)))
  }
}
