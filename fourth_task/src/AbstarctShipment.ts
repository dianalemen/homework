import { ShipmentInterface } from './Shipment';

export class AbstarctShipment implements ShipmentInterface {
  shipmentId: number;
  toAddress: string;
  fromAdress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  type: string;
  marks?: string[];

  constructor({ shipmentId, toAddress, fromAdress, fromZipCode, toZipCode, weight, marks }) {
    this.shipmentId = shipmentId;
    this.toAddress = toAddress;
    this.fromAdress = fromAdress;
    this.fromZipCode = fromZipCode;
    this.toZipCode = toZipCode;
    this.weight = weight;
    this.marks = marks;
  }
}
