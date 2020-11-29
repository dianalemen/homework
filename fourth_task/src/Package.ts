import { Shipment } from './Shipment';

export class Package extends Shipment {
  constructor(shipment) {
    super({ ...shipment, type: 'package' });
  }
}
