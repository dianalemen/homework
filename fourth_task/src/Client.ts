import { ShipmentInterface } from './Shipment';
import { MockGui } from './MockGui';

export class Client {
  shipment: ShipmentInterface;

  constructor() {
    this.shipment = new MockGui().shipment;
    this.onShip(this.shipment);
  }

  onShip(shipment: ShipmentInterface): string {
    const { shipmentId, fromAdress, fromZipCode, toZipCode, toAddress, weight } = shipment;
    return `${shipmentId}, from ${fromAdress} ${fromZipCode}, to ${toAddress} ${toZipCode}, Cost ${weight * 39}`;
  }
}
