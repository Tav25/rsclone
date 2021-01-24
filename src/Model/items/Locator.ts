import Item from './Item';
import { TItem } from '../Types/types';

export default class Locator extends Item {
  isClickable: boolean;
  map: any;

  constructor(itemObject: TItem, map: any) {
    super(itemObject);
    this.isClickable = itemObject.isClickable;
    this.map = map;
  }

  showMap(): any {
    return this.map;
  }
}