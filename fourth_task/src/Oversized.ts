import { Shipment } from './Shipment';

export class Oversized extends Shipment {
  constructor(shipment) {
    super({ ...shipment, type: 'oversized' });
  }
}
