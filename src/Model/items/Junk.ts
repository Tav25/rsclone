import Item from './Item';
import { TItem } from '../../Types/types';

export default class Junk extends Item {
  cost: number;
  constructor(itemObject: TItem) {
    super(itemObject);
    this.cost = itemObject.cost;
  }
}