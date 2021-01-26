import { TItem, TObject } from "../types/types";
import Equipment from "./Equipment";
import Health from "./Health";
import Inventory from "./Inventory";
import Position from "./Position";

export default class MainCharacter {
  inventory: Inventory;
  health: Health;
  equipment: Equipment;
  position: Position;

  constructor(position: Position) {
    this.inventory = new Inventory();
    this.health = new Health();
    this.equipment = new Equipment();
    this.position = position;
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

  shot(): void {
    this.equipment.releaseAmmo();
    if (this.isNoAmmo()) this.equipment.removeWeapon();
  }

  hit(enemy: TObject): void {
    this.health.damageHealth(enemy.damage);
  }
}