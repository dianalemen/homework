import { ShiperStrategy } from './ShiperStrategy';

export class ChicagoSprint extends ShiperStrategy {
  weight: number;
  cost: number = 42;
  shipmentType: string;

  constructor(weight, type) {
    super(weight, type, 0, 20, 42)
  }

  getCost(): number {
    return super.getCost();
  }
}
