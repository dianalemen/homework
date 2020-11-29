import { Shipment } from './Shipment';

export class Letter extends Shipment {
  constructor(shipment) {
    super({ ...shipment, type: 'letter' });
  }
}
