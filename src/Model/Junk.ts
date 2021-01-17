import Item from './Item';

export default class Junk extends Item {
  cost: number;
  constructor(itemObject: any) {
    super(itemObject);
    this.cost = itemObject.cost;
  }
}