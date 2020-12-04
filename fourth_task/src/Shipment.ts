import { ID } from './mocks/mock_ids';
import { Letter } from './Letter';
import { Package } from './Package';
import { Oversized } from './Oversized';

function format(_, $, propertyDesciptor: PropertyDescriptor): any {
  propertyDesciptor.value = function (...args: any[]) {

      return this.marks.reduce((acc, value) => {

        if (value === 'Do Not Leave') {
          value = `${value} if address not at home`;
        }
  
        const message = `**MARK ${value.toUpperCase()} **`;
  
        return acc ? `${acc}\n ${message}` : message;
      }, '')
  }
  return propertyDesciptor;
};

export interface ShipmentInterface {
  shipmentId: number,
  toAddress: string,
  fromAdress: string,
  toZipCode: string,
  fromZipCode: string,
  weight: number,
  marks?: string[],
  marksMessages?: string | null
}

export class Shipment implements ShipmentInterface {
  shipmentId: number;
  toAddress: string;
  fromAdress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];
  marksMessages?: string | null;

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
      weight,
      marks
    } = this.getShipmentObject(shipment);

    this.shipmentId = shipmentId || this.getShipmentID();
    this.toAddress = toAddress;
    this.fromAdress = fromAdress;
    this.toZipCode = toZipCode;
    this.weight = weight;
    this.marks = marks;
    this.marksMessages = this.getMarksMessages();
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

  @format
  getMarksMessages(): string | null {
    if (!this.marks.length) return null;
  }
  
  getShipmentID() {
    return ID;
  }
}
