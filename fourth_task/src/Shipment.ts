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

export class Shipment {

  constructor(shipment) {
    if (this.isZipCodeValid(shipment.toZipCode)) {
      throw 'Departure zip code has to contain 5 numbers'
    }

    if (this.isZipCodeValid(shipment.fromZipCode)) {
      throw 'Destination zip code has to contain 5 numbers'
    }

    this.getShipmentObject(shipment);
  }

  isZipCodeValid(zipCode) {
    return zipCode.toString().length < 5 || zipCode.toString().length > 5
  }

  getShipmentObject(shipment) {
    const { weight } = shipment;
    switch(true) {
      case weight <= 15:
        return new Letter(shipment);
      case weight > 15 && weight <= 160:
        return new Package(shipment);
      case weight > 160:
        return new Oversized(shipment);
      default:
        return new Shipment(shipment);
    }
  }
}
