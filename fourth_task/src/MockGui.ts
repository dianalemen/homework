import { GuiInterface } from './Gui';
import { ShipmentInterface } from './Shipment';

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

export class MockGui implements GuiInterface {
  listener;
  state: ShipmentInterface;

  constructor() {
    this.state = mockedShipment;
  }

  on(eventType, callback) {
    this.listener = {[eventType]: callback }
  }

  trigger(eventType, state) {
    this.listener[eventType](state)
  }
}
