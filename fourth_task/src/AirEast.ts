import { ShiperStrategy } from './ShiperStrategy';

export class AirEast implements ShiperStrategy  {
  weight: number;
  cost: number = 39;

  constructor(weight) {
    this.weight = weight;
  }

  getCost(): number {
    return this.weight * this.cost;
  }
}
