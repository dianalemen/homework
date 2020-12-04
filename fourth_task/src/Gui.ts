import { ShipmentInterface } from './Shipment';

export interface GuiInterface {
  state: ShipmentInterface
  on: (eventType, callback) => void
  trigger: (eventType: string, state: ShipmentInterface) => void
}

export class Gui implements GuiInterface {
  state;

  on(eventType, callback) {

  }

  trigger(eventType, state) {

  }
}
