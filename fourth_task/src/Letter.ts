import { Shipment } from './Shipment';

export class Letter extends Shipment {
  shipmentId: number;
  toAddress: string;
  fromAdress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];
  type: string = 'letter';

  constructor(
    shipmentId: number,
    toAddress: string,
    fromAdress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number
  )
  constructor(
    shipmentId: number,
    toAddress: string,
    fromAdress: string,
    toZipCode: string,
    fromZipCode: string,
    weight: number,
    marks: string[]
  )

  constructor(shipmentId, toAddress, fromAdress, toZipCode, fromZipCode, weight, marks = []) {
    super(shipmentId, toAddress, fromAdress, toZipCode, fromZipCode, weight, marks);
  }
}
