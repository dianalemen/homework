import { ShiperStrategy } from './ShiperStrategy';

export class AirEast  implements ShiperStrategy  {
  weight: number;
  cost: number = 39;
  shipmentType: string;

  constructor(weight, type) {
    this.weight = weight;
    this.shipmentType = type;
  }

  getRate(): number {
    switch(this.shipmentType) {
      case 'oversized':
        return 35;
      case 'package':
        return 25;
      case 'letter':
      default:
        return 39;
    }
  }

  getCost(): number {
    return this.weight * this.getRate();
  }
}
