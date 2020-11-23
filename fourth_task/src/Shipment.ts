export interface ShipmentInterface {
  shipmentId: number,
  toAddress: string,
  fromAdress: string,
  toZipCode: string,
  fromZipCode: string,
  weight: number,
  marks?: string[] 
}

export class Shipment implements ShipmentInterface {
  shipmentId: number;
  toAddress: string;
  fromAdress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];

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
    this.shipmentId = shipmentId;
    this.toAddress = toAddress;
    this.fromAdress = fromAdress;
    this.toZipCode = toZipCode;
    this.fromZipCode = fromZipCode;
    this.weight = weight;
    this.marks = marks;
  }
}
