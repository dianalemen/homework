export class ShiperStrategy {
  weight: number;
  cost: number;
  oversizedRate: number;
  packageRate: number;
  letterRate: number;
  shipmentType: string;

  constructor(weight: number, shipmentType, oversizedRate, packageRate, letterRate) {
    this.weight = weight;
    this.shipmentType = shipmentType;
    this.oversizedRate = oversizedRate;
    this.packageRate = packageRate;
    this.letterRate = letterRate;
  }

  getRate(): number {
    switch(this.shipmentType) {
      case 'oversized':
        return this.oversizedRate;
      case 'package':
        return this.packageRate;
      case 'letter':
      default:
        return this.letterRate;
    }
  }

  getCost(): number {
    return this.weight + this.getRate();
  }
}
