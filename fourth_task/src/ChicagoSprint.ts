import { ShiperStrategy } from './ShiperStrategy';

export class ChicagoSprint implements ShiperStrategy {
  weight: number;
  cost: number = 42;
  shipmentType: string;

  constructor(weight, type) {
    this.weight = weight;
    this.shipmentType = type;
  }

  getRate(): number {
    switch(this.shipmentType) {
      case 'oversized':
        return 0;
      case 'package':
        return 20;
      case 'letter':
      default:
        return 42;
    }
  }

  getCost(): number {
    return this.weight * this.getRate();
  }
}
