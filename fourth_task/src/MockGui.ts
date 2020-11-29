import { ShipmentInterface, Shipment } from './Shipment';

const mockedMarks: string[] = ['Fragile', 'Do Not Leave', 'Return Receipt Requested'];
const mockedShipment: ShipmentInterface = {
  shipmentId: 1,
  toAddress: 'Lviv, Svobody str',
  fromAdress: 'Kyiv, Bankova str',
  toZipCode: '79000',
  fromZipCode: '01001',
  weight: 10,
  marks: mockedMarks
}


export class MockGui {
  shipment: ShipmentInterface;

  constructor(shipment: ShipmentInterface = mockedShipment) {
    this.shipment = new Shipment(shipment);
  }
}
