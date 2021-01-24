import { TItem } from "../types/types";
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

  setPosition(location: string, coordinates: number[], direction: string): void {
    this.position = new Position(location, coordinates, direction);
  }

  getPosition(): Position {
    return this.position;
  }

  isDead(): boolean {
    const currentHealth: number = this.health.getCurrentHealth();
    return currentHealth <= 0 ? true : false;
  }

  isNoAmmo(): boolean {
    return this.equipment.getCurrentAmmo() <= 0 ? true : false;
  }

  shot() {
    this.equipment.releaseAmmo();
    if (this.isNoAmmo()) this.equipment.removeWeapon();
  }

  hit(enemyWeapon: TItem) {
    this.health.damageHealth(enemyWeapon);
  }
}