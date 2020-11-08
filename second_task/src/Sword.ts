import { Weapon } from './Weapon';

const MAX_PERCENTAGE = 1.25;
export class Sword extends Weapon {
  name: string;
  baseDamage: number;
  damageModifier: number;
  baseDurability: number;
  value: number;
  weight: number;
  durabilityModifier: number;
  effectiveDamage: number;
  effectiveDurability: number;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight:number) {
    super(name, baseDamage, baseDurability, value, weight)
    this.name = name;
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.value = value;
    this.weight = weight;
  }

  polish() {
    this.damageModifier = this.damageModifier + Weapon.MODIFIER_CHANGE_RATE;
    this.effectiveDamage = this.effectiveDamage < MAX_PERCENTAGE
      ? this.baseDamage + this.damageModifier
      : MAX_PERCENTAGE;
  }

  setDurabilityModifier(durabilityModifier) {
    this.durabilityModifier = durabilityModifier;
    this.effectiveDurability = this.baseDurability + this.durabilityModifier;
  }

  setDamageModifier(damageModifier) {
    this.damageModifier = damageModifier;
    this.effectiveDamage = this.baseDamage + this.damageModifier; 
  }

  use():string {
    return '';
  }

  getDamage(): number {
    return this.effectiveDamage;
  }

  getDurability(): number {
    return this.effectiveDurability;
  }
}