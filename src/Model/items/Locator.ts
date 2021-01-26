import Item from './Item';
import { TItem } from '../types/types';

export default class Locator extends Item {
  isClickable: boolean;
  worldMap: string;

  constructor(itemObject: TItem, worldMap: string) {
    super(itemObject);
    this.isClickable = itemObject.isClickable;
    this.worldMap = worldMap;
  }

  showMap(): string {
    return this.worldMap;
  }
}