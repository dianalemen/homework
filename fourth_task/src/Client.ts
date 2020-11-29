import { ShipmentInterface } from './Shipment';
import { StrategyManager } from './StrategyManager';
import { MockGui } from './MockGui';

export class Client {
  shipment: ShipmentInterface;
  strategyManager;

  constructor() {
    this.shipment = new MockGui().shipment;
    this.strategyManager = new StrategyManager();
    this.strategyManager.setStrategy(this.shipment);
    this.onShip(this.shipment);
  }

  onShip(shipment: ShipmentInterface): string {
    const { shipmentId, fromAdress, fromZipCode, toZipCode, toAddress } = shipment;
    return `${shipmentId}, from ${fromAdress} ${fromZipCode}, to ${toAddress} ${toZipCode}, OK ${this.strategyManager.getCost()}`;
  }
}
