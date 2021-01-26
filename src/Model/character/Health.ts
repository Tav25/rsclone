import { TItem } from "../types/types";

export default class Health {
  maxHealth: number;
  currentHealth: number;

  constructor() {
    this.maxHealth = 96;
    this.currentHealth = 96;
  }

  getCurrentHealth():number {
    return this.currentHealth;
  }

  restoreHealth(itemObject: TItem): void {
    const newHealth: number = this.currentHealth + itemObject.restoredHealth;
    this.currentHealth = newHealth <= this.maxHealth ? newHealth : this.maxHealth;
  }

  damageHealth(damage: number): void {
    const newHealth: number = this.currentHealth - damage;
    this.currentHealth = newHealth > 0 ? newHealth : 0;
  }
}