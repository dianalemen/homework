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

  setDurabilityModifier(durabilityModifier) {
    this.durabilityModifier = Number(Number(durabilityModifier).toFixed(2));
    this.effectiveDurability = this.baseDurability + this.durabilityModifier;
  }

  setDamageModifier(damageModifier) {
    this.damageModifier = damageModifier;
    this.effectiveDamage = this.effectiveDamage + this.damageModifier; 
  }

  polish() {
    if (this.effectiveDurability < 1 ) {
      this.durabilityModifier = this.durabilityModifier + Weapon.MODIFIER_CHANGE_RATE;
      this.effectiveDurability = this.baseDurability + this.durabilityModifier;
    }
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