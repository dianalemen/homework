import { StrategyManager } from './StrategyManager';
import { Shipment, ShipmentInterface } from './Shipment';
import { MockGui } from './MockGui';
import { GuiInterface } from './Gui';

const event = 'shipItself';

export class Client {
  gui: GuiInterface;
  shipment: ShipmentInterface;
  strategyManager;

  constructor(gui: GuiInterface = new MockGui()) {
    this.gui = gui;
    this.gui.on(event, this.onShip.bind(this));
    this.shipment = new Shipment(this.gui.state);
    this.strategyManager = new StrategyManager();
    this.strategyManager.setStrategy(this.shipment);
    this.gui.trigger(event, this.gui.state);
  }

  onShip(shipment: ShipmentInterface): string {
    const { shipmentId, fromAdress, fromZipCode, toZipCode, toAddress } = shipment;
    return `${shipmentId}, from ${fromAdress} ${fromZipCode}, to ${toAddress} ${toZipCode}, Cost ${this.strategyManager.getCost()}`;
  }
}
