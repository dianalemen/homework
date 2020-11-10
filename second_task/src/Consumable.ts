export class Consumable {
	consumed: boolean;
	spoiled: boolean;
	name: string;
	value: number;
	weight: number;

	constructor(name: string, value: number, weight: number, spoiled: boolean) {
		this.name = name;
		this.value = value;
		this.weight = weight;
		this.spoiled = spoiled;
		this.consumed = false;
	}

	use(): string {
		if (!this.spoiled || !this.consumed) {
			return this.eat()
		}
	}

	eat() {
		if (this.consumed) {
			return `There is nothing left of the ${this.name} to consume.`
		}

		if (this.spoiled) {
			return `You eat the ${this.name}.\nYou feel sick.`
		}

		return `You eat the ${this.name}.`;
	}

	setConsumed(consumed) {
		this.consumed = consumed;
	}
}
