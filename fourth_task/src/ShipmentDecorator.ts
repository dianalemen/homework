interface ShipmentDecoratorInterface {
  ship: (val) => string
}

export class ShipmentDecorator implements ShipmentDecoratorInterface {
  shipment;
  shipmentId: number;
  toAddress: string;
  fromAdress: string;
  toZipCode: string;
  fromZipCode: string;
  weight: number;
  marks?: string[];

  constructor(shipment) {
    this.shipment = shipment;
    this.shipmentId = this.shipment.shipmentId;
    this.toAddress = this.shipment.toAddress;
    this.fromAdress = this.shipment.fromAdress;
    this.toZipCode = this.shipment.toZipCode;
    this.weight = this.shipment.weight;
    this.marks = this.shipment.marks;
  }

  ship(cost): string {
    const markedMessages = this.shipment.marks.reduce((acc, value) => {

      if (value === 'Do Not Leave') {
        value = `${value} if address not at home`;
      }

      const message = `**MARK ${value.toUpperCase()} **`;

      return acc ? `${acc}\n ${message}` : message;
    }, '')

    return `${this.shipment.ship(cost)}\n ${markedMessages}`;
  }
}
