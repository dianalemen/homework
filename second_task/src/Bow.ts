import { Weapon } from './Weapon';

export class Bow extends Weapon {
  name: string = 'bow';
  baseDamage: number;
  damageModifier: number;
  baseDurability: number;
  value: number;
  weight: number;
  durabilityModifier: number;
  effectiveDamage: number;
  effectiveDurability: number;

  constructor(name:string, baseDamage: number, baseDurability: number, value: number, weight:number) {
    super(name, baseDamage, baseDurability, value, weight)
    this.name = name;
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
    this.value = value;
    this.weight = weight;
  }

  polish() {
    if (this.effectiveDurability < 1 ) {
      this.durabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
      this.effectiveDurability = this.baseDurability + this.durabilityModifier;
    }
  }
}