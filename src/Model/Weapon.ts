import Item from './Item';

export default class Weapon extends Item {
  damage: number;
  ammo: number;
  range: number;

  constructor(itemObject: any) {
    super(itemObject);
    this.damage = itemObject.damage;
    this.ammo = itemObject.ammo;
    this.range = itemObject.range;
  }
}
