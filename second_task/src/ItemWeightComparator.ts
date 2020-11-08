import { Item } from './Item';
import { ItemComparator } from './ItemComparator';

export class ItemWeightComparator implements ItemComparator {
	public compare(first: Item, second: Item) {
		const { weight: firstWeight } = first;
		const { weight: secondWeight } = second;
		
		if (firstWeight !== secondWeight && firstWeight > secondWeight) {
			return 1;
		}

		if (firstWeight !== secondWeight && firstWeight < secondWeight) {
			return -1;
		}

		return first.compareTo(second);
	}
}
