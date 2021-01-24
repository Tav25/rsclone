import CommonObject from './CommonObject';
import { TItem, TObject } from '../Types/types';

export default class Crate extends CommonObject{
  openedIcon: string;
  isKeyNeededToOpen: boolean;
  returnedItem: TItem;
  itemToActivate: TItem;
  triggerToActivate: TObject;
  triggered: boolean;

  constructor(objectObject: TObject, itemObject: TItem, activationItem?: TItem, activationTrigger?: TObject) {
    super(objectObject);
    this.openedIcon = objectObject.openedIcon;
    this.returnedItem = itemObject;
    this.isKeyNeededToOpen = objectObject.isKeyNeededToOpen;
    this.itemToActivate = activationItem;
    this.triggerToActivate = activationTrigger;
    this.triggered = false;
  }

  isValidKey(itemObject: TItem): boolean {
    return itemObject.id === this.itemToActivate.id;
  }

  isTriggered(): boolean {
    return this.triggerToActivate.triggered;
  }

  activate(itemObject?: TItem): TItem {
    if (!this.isKeyNeededToOpen || this.isTriggered() || this.isValidKey(itemObject)) {
      this.triggered = true;
      this.icon = this.openedIcon;
      return this.returnedItem;
    }
  }
}