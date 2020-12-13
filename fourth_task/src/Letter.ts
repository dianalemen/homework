import { AbstarctShipment } from './AbstarctShipment';

export class Letter extends AbstarctShipment {
  constructor(shipment) {
    super(shipment);
    this.type = 'letter'
  }
}
