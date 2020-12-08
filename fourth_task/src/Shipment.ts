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

  constructor(shipment) {
    if (this.isZipCodeValid(shipment.toZipCode)) {
      throw 'Departure zip code has to contain 5 numbers'
    }

    if (this.isZipCodeValid(shipment.fromZipCode)) {
      throw 'Destination zip code has to contain 5 numbers'
    }

    const {
      shipmentId,
      toAddress,
      fromAdress,
      toZipCode,
      fromZipCode,
      weight,
      marks
    } = this.getShipmentObject(shipment);

    this.shipmentId = shipmentId || this.getShipmentID();
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

  ship(cost): string {
    const { shipmentId, fromAdress, fromZipCode, toZipCode, toAddress  } = this;
    const message = `${shipmentId},
      from ${fromAdress} ${fromZipCode},
      to ${toAddress} ${toZipCode},
      Cost ${cost}`;

      return message;
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
  
  getShipmentID() {
    return ID;
  }
}
