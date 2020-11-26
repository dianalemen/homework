export class ShiperStrategy {
  weight: number;
  cost: number;

  getCost(): number {
    return this.weight + this.cost;
  }
}
