import { Consumable } from './Consumable';

export class Pizza extends Consumable {
  numberOfSlice: number;
  slicesEaten: number = 0;

  constructor(numberOfSlice: number, spoiled: boolean) {
    super('pizza', 1, 1, spoiled)
    this.numberOfSlice = numberOfSlice;
    this.spoiled = spoiled;
  }

  eat():string {
    if (this.slicesEaten < this.numberOfSlice && !this.spoiled) {
      this.slicesEaten++;
      return `You eat a slice of the ${this.name}.`;
    }

    if (this.spoiled) {
      return `You eat a slice of the ${this.name}.\nYou feel sick.`
    }

    if (this.slicesEaten >= this.numberOfSlice) {
      super.setConsumed(true);

      if (this.consumed) {
        return `There is nothing left of the ${this.name} to consume.`
      }
    }
    return '';
  }
}
