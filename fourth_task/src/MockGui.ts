import { ShipmentInterface, Shipment } from './Shipment';

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
    this.shipment = new Shipment(id, toAdress, fromAdress, toZipCode, fromZipCode, weight);
  }
}