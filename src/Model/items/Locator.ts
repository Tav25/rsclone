import Item from './Item';
import { TItem } from '../types/types';

export default class Locator extends Item {
  isClickable: boolean;
  map: string;

  constructor(itemObject: TItem, map: string) {
    super(itemObject);
    this.isClickable = itemObject.isClickable;
    this.map = map;
  }

  showMap(): string {
    return this.map;
  }
}