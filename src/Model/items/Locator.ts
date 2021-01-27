import Item from './Item';
import { TItem } from '../types/types';

export default class Locator extends Item {
  isClickable: boolean;
  worldMap: string;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.isClickable = itemObject.isClickable;
    this.worldMap = itemObject.worldMap;
  }

  showMap(): string {
    return this.worldMap;
  }
}