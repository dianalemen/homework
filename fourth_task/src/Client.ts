import { StrategyManager } from './StrategyManager';
import { Shipment, ShipmentInterface } from './Shipment';
import { MockGui } from './MockGui';
import { GuiInterface } from './Gui';
import { ShipmentDecorator } from './ShipmentDecorator';

const event = 'shipItself';

export class Client {
  gui: GuiInterface;
  shipment: ShipmentInterface;
  strategyManager;

  constructor(gui: GuiInterface = new MockGui()) {
    this.gui = gui;
    this.gui.on(event, this.onShip.bind(this));
    this.shipment = new ShipmentDecorator(new Shipment(this.gui.state));
    this.strategyManager = new StrategyManager();
    this.strategyManager.setStrategy(this.shipment);
    this.gui.trigger(event, this.shipment);
  }

  onShip(shipment): string {
    return shipment.ship(this.strategyManager.getCost());
  }
}
