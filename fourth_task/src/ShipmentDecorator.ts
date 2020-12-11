import { AbstarctShipment } from './AbstarctShipment';

interface ShipmentDecoratorInterface {
  ship: (val) => string
}

export class ShipmentDecorator extends AbstarctShipment implements ShipmentDecoratorInterface {
  shipment;

  constructor(shipment) {
    super(shipment)
    this.shipment = shipment;
  }

  ship(cost): string {
    const markedMessages = this.shipment.marks.reduce((acc, value) => {

      if (value === 'Do Not Leave') {
        value = `${value} if address not at home`;
      }

      const message = `**MARK ${value.toUpperCase()} **`;

      return acc ? `${acc}\n ${message}` : message;
    }, '')

    // for the testing purpose
    console.log(`${this.shipment.ship(cost)}\n ${markedMessages}`);
    return `${this.shipment.ship(cost)}\n ${markedMessages}`;
  }
}
