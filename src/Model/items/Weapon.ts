import Item from './Item';
import { TItem } from '../types/types';

export default class Weapon extends Item {
  isEquippable: boolean;
  damage: number;
  currentAmmo: number;
  maxAmmo: number;
  range: number;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.isEquippable = itemObject.isEquippable;
    this.damage = itemObject.damage;
    this.currentAmmo = itemObject.currentAmmo;
    this.maxAmmo = itemObject.maxAmmo;
    this.range = itemObject.range;
  }
}
