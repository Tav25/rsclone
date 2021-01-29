import CommonObject from './CommonObject';
import { TItem, TObject } from '../types/types';
import ItemOnTheGround from './ItemOnTheGround';

export default class Character extends CommonObject {
  returnedItem: TItem;

  constructor(objectObject: TObject) {
    super(objectObject);
    this.returnedItem = objectObject.returnedItem;
  }

  activate(itemObject: TItem): ItemOnTheGround {
    if (!this.isFirstVisit) {
      if (this.isKeyNeededToOpen) {
        if (this.isValidKey(itemObject)) {
          this.triggered = true;
          return new ItemOnTheGround(this.objectObject, this.returnedItem);
        }
      } else if (this.triggerToActivate) {
        if (this.isTriggered()) {
          this.triggered = true;
          return new ItemOnTheGround(this.objectObject, this.returnedItem);
        }
      } else {
        this.triggered = true;
        return new ItemOnTheGround(this.objectObject, this.returnedItem);
      }
    }
  }
}