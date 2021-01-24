import CommonObject from './CommonObject';
import { TItem, TObject } from '../types/types';

export default class TradingPlace extends CommonObject{
  returnedItems1: TItem[];
  returnedItems2: TItem[];

  constructor(objectObject: TObject, itemObjectList1: TItem[], itemObjectList2: TItem[]) {
    super(objectObject);
    this.returnedItems1 = itemObjectList1;
    this.returnedItems2 = itemObjectList2;
  }

  isValidKey(itemObject: TItem): boolean {
    return itemObject.isTradable;
  }

  activate(itemObject: TItem): TItem {
    if (this.isValidKey(itemObject)) {
      if (itemObject.cost === 1) {
      return this.returnedItems1[Math.floor(Math.random() * this.returnedItems1.length)];
      } else if (itemObject.cost === 2) {
      return this.returnedItems2[Math.floor(Math.random() * this.returnedItems2.length)];
      }
    }
  }
}