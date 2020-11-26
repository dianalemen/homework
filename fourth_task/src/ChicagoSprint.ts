import { ShiperStrategy } from './ShiperStrategy';

export class ChicagoSprint implements ShiperStrategy {
  weight: number;
  cost: number = 42;

  constructor(weight) {
    this.weight = weight;
  }

  getCost(): number {
    return this.weight * this.cost;
  }
}
