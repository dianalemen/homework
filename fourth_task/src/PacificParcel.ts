import { ShiperStrategy } from './ShiperStrategy';

export class PacificParcel implements ShiperStrategy {
  weight: number;
  cost: number = 51;

  constructor(weight) {
    this.weight = weight;
  }

  getCost(): number {
    return this.weight * this.cost;
  }
}
