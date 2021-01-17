import Equipment from "./Equipment";
import Health from "./Health";
import Inventory from "./Inventory";

export default class MainCharacter {
  inventory: Inventory;
  health: Health;
  equipment: Equipment;

  constructor() {
    this.inventory = new Inventory();
    this.health = new Health();
    this.equipment = new Equipment();
  }

  isDead(): boolean {
    const currentHealth: number = this.health.getCurrentHealth();
    return currentHealth <= 0 ? true : false;
  }

  isNoAmmo(): boolean {
    const currentAmmo: number = this.equipment.getCurrentAmmo();
    return currentAmmo <= 0 ? true : false;
  }
}