import Item from './Item';

export default class MedKit extends Item {
  restoredHealth: number;

  constructor(itemObject: any) {
    super(itemObject);
    this.restoredHealth = itemObject.restoredHealth;
  }
}
