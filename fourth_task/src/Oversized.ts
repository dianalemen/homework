import { AbstarctShipment } from './AbstarctShipment';

export class Oversized  extends AbstarctShipment {
  constructor(shipment) {
    super(shipment);
    this.type = 'oversized';
  }
}
