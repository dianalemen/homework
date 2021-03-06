import { Weapon } from './Weapon';

export class Bow extends Weapon {
	constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
		super(name, baseDamage, baseDurability, value, weight)
	}

	polish() {
		if (this.effectiveDurability < 1) {
			this.durabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
			this.effectiveDurability = this.baseDurability + this.durabilityModifier;
		}
	}
}
