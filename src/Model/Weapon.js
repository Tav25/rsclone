import Item from './Item';

export default class Weapon extends Item {
  constructor(itemObject) {
    super(itemObject);
    this.damage = itemObject.damage;
    this.ammo = itemObject.ammo;
    this.range = itemObject.range;
  }
}
