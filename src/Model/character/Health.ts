import MedKit from "../items/MedKit";

export default class Health {
  maxHealth: number;
  currentHealth: number;

  constructor() {
    this.maxHealth = 96;
    this.currentHealth = 10;
  }

  getCurrentHealth():number {
    return this.currentHealth;
  }

  restoreHealth(itemInstance: MedKit): void {
    const newHealth: number = this.currentHealth + itemInstance.restoredHealth;
    this.currentHealth = newHealth <= this.maxHealth ? newHealth : this.maxHealth;
  }

  damageHealth(damage: number): void {
    const newHealth: number = this.currentHealth - damage;
    this.currentHealth = newHealth > 0 ? newHealth : 0;
  }
}