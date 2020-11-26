import { ShipmentInterface, Shipment } from './Shipment';
import { Letter } from './Letter';
import { Package } from './Package';
import { Oversized } from './Oversized';

export class MockGui {
  shipment: ShipmentInterface;

  constructor();
  constructor() {
    const id = 1;
    const toAdress = 'Lviv, Svobody str';
    const fromAdress = 'Kyiv, Bankova str';
    const toZipCode = '79000';
    const fromZipCode = '01001';
    const weight = 10;

    this.shipment = this.getShipmentObject(id, toAdress, fromAdress, toZipCode, fromZipCode, weight);
  }

  getShipmentObject(id, toAdress, fromAdress, toZipCode, fromZipCode, weight) {
    switch(true) {
      case weight <= 15:
        return new Letter(id, toAdress, fromAdress, toZipCode, fromZipCode, weight);
      case weight > 15 && weight <= 160:
        return new Package(id, toAdress, fromAdress, toZipCode, fromZipCode, weight);
      case weight > 160:
        return new Oversized(id, toAdress, fromAdress, toZipCode, fromZipCode, weight);
      default:
        return new Shipment(id, toAdress, fromAdress, toZipCode, fromZipCode, weight, []);
    }
  }
}
