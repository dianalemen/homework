import { ShipmentInterface, Shipment } from './Shipment';

const mockedShipment: ShipmentInterface = {
  shipmentId: 1,
  toAddress: 'Lviv, Svobody str',
  fromAdress: 'Kyiv, Bankova str',
  toZipCode: '79000',
  fromZipCode: '01001',
  weight: 10
}
export class MockGui {
  shipment: ShipmentInterface;

  constructor(shipment: ShipmentInterface = mockedShipment) {
    this.shipment = new Shipment(shipment);
  }
}
