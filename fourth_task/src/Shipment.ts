import { ID } from './mocks/mock_ids';
import { Letter } from './Letter';
import { Package } from './Package';
import { Oversized } from './Oversized';

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
  
  constructor(shipmentId, toAddress, fromAdress, toZipCode, fromZipCode, weight) {
    if (this.isZipCodeValid(toZipCode)) {
      throw 'Departure zip code has to contain 5 numbers'
    }

    if (this.isZipCodeValid(fromZipCode)) {
      throw 'Destination zip code has to contain 5 numbers'
    }

    const shipment = this.getShipmentObject(shipmentId, toAddress, fromAdress, toZipCode, fromZipCode, weight);
    this.shipmentId = shipment.shipmentId || ID;
    this.toAddress = shipment.toAddress;
    this.fromAdress = shipment.fromAdress;
    this.toZipCode = shipment.toZipCode;
    this.fromZipCode = shipment.fromZipCode;
    this.weight = shipment.weight;
    this.marks = shipment.marks || [];
  }

  isZipCodeValid(zipCode) {
    return zipCode.toString().length < 5 || zipCode.toString().length > 5
  }

  getShipmentObject(id, toAddress, fromAdress, toZipCode, fromZipCode, weight) {
    switch(true) {
      case weight <= 15:
        return new Letter(id, toAddress, fromAdress, toZipCode, fromZipCode, weight);
      case weight > 15 && weight <= 160:
        return new Package(id, toAddress, fromAdress, toZipCode, fromZipCode, weight);
      case weight > 160:
        return new Oversized(id, toAddress, fromAdress, toZipCode, fromZipCode, weight);
      default:
        return new Shipment(id, toAddress, fromAdress, toZipCode, fromZipCode, weight);
    }
  }
}
