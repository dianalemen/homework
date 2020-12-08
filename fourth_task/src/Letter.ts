import { ShipmentInterface } from './Shipment';

export class Letter implements ShipmentInterface {
  shipmentId: number;
  toAddress: string;
  fromAdress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  type: string;
  marks?: string[];

  constructor(shipment) {
    this.shipmentId = shipment.shipmentId;
    this.toAddress = shipment.toAddress;
    this.fromAdress = shipment.fromAdress;
    this.fromZipCode = shipment.fromZipCode;
    this.toZipCode = shipment.toZipCode;
    this.weight = shipment.weight;
    this.marks = shipment.marks;
    this.type = 'letter'
  }
}
