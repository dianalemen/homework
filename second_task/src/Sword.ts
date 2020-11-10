import { Weapon } from './Weapon';

const MAX_PERCENTAGE = 1.25;
export class Sword extends Weapon {
	constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
		super(name, baseDamage, baseDurability, value, weight)
	}

	polish() {
		this.damageModifier = this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
		this.effectiveDamage = this.effectiveDamage < MAX_PERCENTAGE
			? this.baseDamage + this.damageModifier
			: MAX_PERCENTAGE;
	}
}
