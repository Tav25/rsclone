import { TItem } from "../Types/types";

export default class Equipment {
  equippedWeapon: TItem;

  constructor() {
    this.equippedWeapon = null;
  }

  getEquipment(): TItem {
    return this.equippedWeapon;
  }

  getCurrentAmmo(): number {
    return this.equippedWeapon.currentAmmo;
  }

  equipWeapon(itemObject: TItem): void {
    if (itemObject.isEquippable) this.equippedWeapon = itemObject;
  }

  removeWeapon(): void {
    this.equippedWeapon = null;
  }

  releaseAmmo(): void {
    this.equippedWeapon.currentAmmo -= 1;
  }
}