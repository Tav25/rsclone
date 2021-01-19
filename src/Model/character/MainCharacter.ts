import Equipment from "./Equipment";
import Health from "./Health";
import Inventory from "./Inventory";
import Position from "./Position";

export default class MainCharacter {
  inventory: Inventory;
  health: Health;
  equipment: Equipment;
  position: Position;

  constructor() {
    this.inventory = new Inventory();
    this.health = new Health();
    this.equipment = new Equipment();
  }

  setCoordinates(location: string, coordinates: number[], direction: string): void {
    this.position = new Position(location, coordinates, direction);
  }

  getCoordinates(): Position {
    return this.position;
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