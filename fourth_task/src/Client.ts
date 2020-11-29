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
    const { shipmentId, fromAdress, fromZipCode, toZipCode, toAddress, marksMessages  } = shipment;
    const basicMessage = `${shipmentId},
      from ${fromAdress} ${fromZipCode},
      to ${toAddress} ${toZipCode},
      Cost ${this.strategyManager.getCost()}`;

    return marksMessages ? basicMessage + marksMessages : basicMessage;
  }
}
