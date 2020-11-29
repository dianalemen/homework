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
    const { shipmentId, fromAdress, toAddress } = shipment;
    return `${shipmentId}, from ${fromAdress}, to${toAddress}, the cost${this.strategyManager.getCost()}`;
  }
}
