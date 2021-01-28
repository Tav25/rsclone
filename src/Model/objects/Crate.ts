import CommonObject from './CommonObject.ts';
import { TIcon, TItem, TObject } from '../types/types.ts';
import ItemOnTheGround from './ItemOnTheGround.ts';

export default class Crate extends CommonObject{
  openedIcon: TIcon;
  returnedItem: TItem;

  constructor(objectObject: TObject) {
    super(objectObject);
    this.openedIcon = objectObject.openedIcon;
    this.returnedItem = objectObject.returnedItem;
  }

  activate(itemObject: TItem): ItemOnTheGround {
    if (!this.isFirstVisit) {
      if (this.isKeyNeededToOpen) {
        if (this.isValidKey(itemObject)) {
          this.triggered = true;
          this.icon = this.openedIcon;
          return new ItemOnTheGround(this.objectObject, this.returnedItem);
        }
      } else if (this.triggerToActivate) {
        if (this.isTriggered()) {
          this.triggered = true;
          this.icon = this.openedIcon;
          return new ItemOnTheGround(this.objectObject, this.returnedItem);
        }
      } else {
        this.triggered = true;
        this.icon = this.openedIcon;
        return new ItemOnTheGround(this.objectObject, this.returnedItem);
      }
    }
  }
}