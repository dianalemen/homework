import { Comparable } from './Comparable';

let id = 0;
let counter = 0;

export abstract class Item implements Comparable<Item> {
	name: string;
	value: number;
	weight: number;
	id: number;

	constructor(name: string, value?: number, weight?: number) {
		this.name = name;
		this.value = value;
		this.weight = weight;
		this.id = id;
		counter = counter++;
	}

	 compareTo(other: Item): number {
		const { value: currValue, name: currName } = this;
		const { value: otherValue, name: otherName } = other;

		if (currValue !== otherValue && currValue > otherValue) {
			return 1;
		}

		if (currValue !== otherValue && currValue < otherValue) {
			return -1;
		}

		const currNameInLoweCase = currName.toLowerCase();
		const otherNameInLowerCase = otherName.toLowerCase();

		if (currNameInLoweCase > otherNameInLowerCase) {
			return 1;
		}

		if (currNameInLoweCase < otherNameInLowerCase) {
			return -1;
		}

		return 0;
	}

	toString(): string {
		return `${this.name.toLowerCase()} - Value: ${this.value}, Weight: ${this.weight}`;
	}

	reset() {
		counter = 0;
	}

	getId(): number {
		return id;
	}

	getName(): string {
		return this.name;
	}

	getValue(): number {
		return this.value;
	}

	getWeight(): number {
		return this.weight;
	}

	setValue(price) {
		this.value = price;
	}

	setName(name) {
		this.name = name;
	}

	setWeight(weight) {
		this.weight = weight;
	}

	static get numberOfItems() {
		return counter;
	}
}
