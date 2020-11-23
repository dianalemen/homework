import { ID } from './mocks/mock_ids';

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
    if (this.isZipCodeValid(toZipCode)) {
      throw 'Departure zip code has to contain 5 numbers'
    }

    if (this.isZipCodeValid(fromZipCode)) {
      throw 'Destination zip code has to contain 5 numbers'
    }

    this.shipmentId = shipmentId || ID;
    this.toAddress = toAddress;
    this.fromAdress = fromAdress;
    this.toZipCode = toZipCode;
    this.fromZipCode = fromZipCode;
    this.weight = weight;
    this.marks = marks;
  }

  isZipCodeValid(zipCode) {
    return zipCode.toString().length < 5 || zipCode.toString().length > 5
  }
}
