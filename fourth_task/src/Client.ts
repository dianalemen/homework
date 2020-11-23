import { ShipmentInterface } from './Shipment';
import { MockGui } from './MockGui';

export class Client {
  shipment: ShipmentInterface;

  constructor();
  constructor() {
    this.shipment = new MockGui().shipment;
    this.onShip(this.shipment);
  }

  onShip(shipment: ShipmentInterface): string {
    const { shipmentId, fromAdress, toAddress, weight } = shipment;
    return `${shipmentId}, from ${fromAdress}, to${toAddress}, the cost${weight * 39}`;
  }
}
