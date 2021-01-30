import Weapon from "../items/Weapon";
import { TItem } from "../types/types";

export default class Equipment {
  equippedWeapon: Weapon;

  constructor() {
    this.equippedWeapon = null;
  }

  getEquipment(): Weapon {
    return this.equippedWeapon;
  }

  getCurrentAmmo(): number {
    return this.equippedWeapon.currentAmmo;
  }

  equipWeapon(itemInstance: Weapon): void {
    if (itemInstance.isEquippable) this.equippedWeapon = itemInstance;
  }

  removeWeapon(): void {
    this.equippedWeapon = null;
  }

  releaseAmmo(): void {
    this.equippedWeapon.currentAmmo -= 1;
  }
}