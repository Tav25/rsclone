import Item from './Item';
import { TItem } from '../types/types';

export default class Junk extends Item {
  isTradable: boolean;
  cost: number;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.isTradable = itemObject.isTradable;
    this.cost = itemObject.cost;
  }
}