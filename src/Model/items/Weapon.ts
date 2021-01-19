import Item from './Item';
import { TItem } from '../../Types/types';

export default class Weapon extends Item {
  damage: number;
  currentAmmo: number;
  maxAmmo: number;
  range: number;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.damage = itemObject.damage;
    this.currentAmmo = itemObject.currentAmmo;
    this.maxAmmo = itemObject.maxAmmo;
    this.range = itemObject.range;
  }
}
