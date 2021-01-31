import Junk from "../items/Junk";
import Locator from "../items/Locator";
import MedKit from "../items/MedKit";
import QuestItem from "../items/QuestItem";
import Weapon from "../items/Weapon";
import Enemy from "../objects/Enemy";
import Equipment from "./Equipment";
import Health from "./Health";
import Inventory from "./Inventory";
import Position from "./Position";

export default class MainCharacter {
  icon: string;
  inventory: Inventory;
  health: Health;
  equipment: Equipment;
  position: Position;

  constructor(position: Position, icon: string) {
    this.icon = icon;
    this.inventory = new Inventory();
    this.health = new Health();
    this.equipment = new Equipment();
    this.position = position;
  }

  setPosition(location: string, coordinates: number[], direction: string): boolean {
    this.position = new Position(location, coordinates, direction);
    return true;
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

  shot(): boolean {
    this.equipment.releaseAmmo();
    if (this.isNoAmmo()) this.equipment.removeWeapon();
    return true;
  }

  hit(enemy: Enemy): boolean {
    this.health.damageHealth(enemy.damage);
    return true;
  }

  hasItem(itemName: string): boolean {
    return this.inventory.hasItem(itemName);
  }

  isThisItemYouNeed(itemName: string) {
    if (this.inventory.hasItem(itemName)) return this.inventory.getItem(itemName);
    else return undefined;
  }

  giveItem(itemName: string) {
    this.inventory.removeItem(itemName);
    return this.inventory.getItem(itemName);
  }

  pickItem(item: Junk | Locator | MedKit | QuestItem | Weapon): boolean {
    this.inventory.addItem(item);
    return true;
  }
}