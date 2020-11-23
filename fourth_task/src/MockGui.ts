import { ShipmentInterface, Shipment } from './Shipment';
import { ID } from './mocks/mock_ids';

export class MockGui {
  shipment: ShipmentInterface;

  constructor();
  constructor() {
    const id = ID;
    const toAdress = 'Lviv, Svobody str';
    const fromAdress = 'Kyiv, Bankova str';
    const toZipCode = '79000';
    const fromZipCode = '01001';
    const weight = 10;
    this.shipment = new Shipment(id, toAdress, fromAdress, toZipCode, fromZipCode, weight);
  }
}