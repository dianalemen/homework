import { AirEast } from './AirEast';
import { ChicagoSprint } from './ChicagoSprint';
import { PacificParcel } from './PacificParcel';

export class StrategyManager {
  _strategy;

  constructor() {
    this._strategy = null;
  }

  setStrategy({ fromZipCode, weight, type }): void {
    let strategy;
    switch(fromZipCode.toString().charAt(0)) {
      case '4':
      case '5':
      case '6':
      strategy = new ChicagoSprint(weight, type);
      break;
      case '7':
      case '8':
      case '9':
      strategy = new PacificParcel(weight, type);
      break;
      case '1':
      case '2':
      case '3':
      default:
      strategy = new AirEast(weight, type);
    } 
    this._strategy = strategy;
  }

  getCost(): number {
    return this._strategy.getCost();
  }
}
