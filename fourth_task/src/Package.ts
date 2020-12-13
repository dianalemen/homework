import { AbstarctShipment } from './AbstarctShipment';

export class Package extends AbstarctShipment {
  constructor(shipment) {
    super(shipment);
    this.type = 'package';
  }
}
