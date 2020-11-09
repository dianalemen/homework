import { Item } from './Item'

export abstract class Weapon extends Item {
  baseDamage: number;
  damageModifier: number;
  durabilityModifier: number;
  baseDurability: number;
  weight: number;
  effectiveDamage: number;
  effectiveDurability: number;

  constructor(
    name:string,
    baseDamage: number,
    baseDurability: number,
    value: number,
    weight:number
    ) {
    super(name, value, weight)
    this.name = name;
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.value = value;
    this.weight = weight;
  }

  setDurabilityModifier(durabilityModifier) {
    this.durabilityModifier = durabilityModifier;
    this.effectiveDurability = this.baseDurability + this.durabilityModifier; 
  }

  setDamageModifier(damageModifier) {
    this.damageModifier = damageModifier;
    this.effectiveDamage = Number((this.baseDamage + this.damageModifier).toFixed(2));
  }

  getDamage(): number {
    return this.effectiveDamage;
  }

  getDurability(): number {
    return this.effectiveDurability;
  }

  toString() {
    return `${this.name} - Value: ${this.value}, `
    + `Weight: ${this.weight.toFixed(2)}, `
    + `Damage: ${ this.effectiveDamage}, `
    + `Durability: ${this.effectiveDurability * 100}%`;
  }

  use(): string {
    if (this.effectiveDurability <= 0) {
      return `You can't use the ${this.name}, it is broken.`
    }

    this.effectiveDurability = this.effectiveDurability - Weapon.MODIFIER_CHANGE_RATE;
    const result = `You use the ${this.name}, dealing ${this.effectiveDamage} points of damage.`

    if (this.effectiveDurability <= 0) {
      return result + `\nThe ${this.name} breaks.`
    }

    return result;
  }

  static get MODIFIER_CHANGE_RATE() {
    return 0.05;
  }
}
