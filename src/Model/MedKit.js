import Item from './Item';

export default class MedKit extends Item {
  constructor(itemObject) {
    super(itemObject);
    this.restoredHealth = itemObject.restoredHealth;
  }
}
