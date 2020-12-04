import { GuiInterface } from './Gui';
import { ShipmentInterface } from './Shipment';

const mockedShipment: ShipmentInterface = {
  shipmentId: 1,
  toAddress: 'Lviv, Svobody str',
  fromAdress: 'Kyiv, Bankova str',
  toZipCode: '79000',
  fromZipCode: '01001',
  weight: 10
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
