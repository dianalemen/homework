import { ShiperStrategy } from './ShiperStrategy';

export class PacificParcel extends ShiperStrategy {
  constructor(weight, type) {
    super(weight, type, 2, 19, 51)
  }

  getCost(): number {
    return super.getCost();
  }
}
