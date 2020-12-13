import { ShiperStrategy } from './ShiperStrategy';

export class AirEast extends ShiperStrategy  {
  constructor(weight, type) {
    super(weight, type, 35, 25, 39)
  }

  getCost(): number {
    return super.getCost();
  }
}
