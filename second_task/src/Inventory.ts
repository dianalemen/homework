import { Item } from './Item'
import { ItemComparator } from './ItemComparator'

export class Inventory {
  items: Item[] = [];

  constructor() {}

  sort();
  sort(comparator: ItemComparator);
  sort(comparator?: ItemComparator) {
    const sortingValue = comparator ? 'weight' : 'value';
    return this.items.sort((curr, next) => curr[sortingValue] - next[sortingValue])
  }

  addItem(item) {
    this.items = [...this.items, item];
  }

  toString(): string {
    return this.items.join(',');
  }
}