import CommonObject from './CommonObject';
import { TItem, TObject } from '../types/types';
import ItemOnTheGround from './ItemOnTheGround';

export default class TradingPlace extends CommonObject{
  returnedItems1: TItem[];
  returnedItems2: TItem[];

  constructor(objectObject: TObject) {
    super(objectObject);
    this.returnedItems1 = objectObject.returnedItems1;
    this.returnedItems2 = objectObject.returnedItems2;
  }

  isValidKey(itemObject: TItem): boolean {
    return !!itemObject.isTradable;
  }

  activate(itemObject: TItem): ItemOnTheGround {
    if (!this.isFirstVisit) {
      if (this.isValidKey(itemObject)) {
        this.triggered = true;
        if (itemObject.cost === 1) {
          const returnedItem = this.returnedItems1[Math.floor(Math.random() * this.returnedItems1.length)];
          return new ItemOnTheGround(this.objectObject, returnedItem);
        } else if (itemObject.cost === 2) {
          const returnedItem = this.returnedItems2[Math.floor(Math.random() * this.returnedItems2.length)];
          return new ItemOnTheGround(this.objectObject, returnedItem);
        }
      }
    }
  }

  getDialog(): string {
    if (this.greetingDialog || this.acceptDialog || this.rejectDialog || this.postDialog) {
      if (this.isFirstVisit) {
        this.isFirstVisit = false;
        if (!this.isKeyNeededToOpen) {
          return this.acceptDialog;
        }
        return this.greetingDialog;
      } else if (this.triggered) {
        this.triggered = false;
        return this.acceptDialog;
      } else if (!this.triggered) {
        return this.rejectDialog;
      } else return this.postDialog;
    }
  }
}