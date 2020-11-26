import { ShiperStrategy } from './ShiperStrategy';

export class PacificParcel implements ShiperStrategy {
  weight: number;
  cost: number = 51;
  shipmentType: string;

  constructor(weight, type) {
    this.weight = weight;
    this.shipmentType = type;
  }

  getRate(): number {
    switch(this.shipmentType) {
      case 'oversized':
        return 2;
      case 'package':
        return 19;
      case 'letter':
      default:
        return 51;
    }
  }

  getCost(): number {
    return this.weight * this.getRate();
  }
}
