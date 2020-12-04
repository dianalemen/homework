import { Shipment, ShipmentInterface } from './Shipment';
import { MockGui } from './MockGui';
import { GuiInterface } from './Gui';

const event = 'shipItself';

export class Client {
  gui: GuiInterface;

  constructor(gui: GuiInterface = new MockGui()) {
    this.gui = gui;
    this.gui.on(event, this.onShip);
    this.gui.trigger(event, this.gui.state);
  }

  onShip(shipment: ShipmentInterface): string {
    const { shipmentId, fromAdress, fromZipCode, toZipCode, toAddress, weight } = shipment;
    return `${shipmentId}, from ${fromAdress} ${fromZipCode}, to ${toAddress} ${toZipCode}, Cost ${weight * 39}`;
  }
}
