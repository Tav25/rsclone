import CommonObject from './CommonObject';
import { TIcon, TItem, TObject } from '../types/types';

export default class Crate extends CommonObject{
  openedIcon: TIcon;
  isKeyNeededToOpen: boolean;
  returnedItem: TItem;
  itemToActivate: TItem;
  triggerToActivate: TObject;
  triggered: boolean;
  rejectDialog: string;

  constructor(objectObject: TObject, itemObject: TItem, activationItem?: TItem, activationTrigger?: TObject) {
    super(objectObject);
    this.openedIcon = objectObject.openedIcon;
    this.returnedItem = itemObject;
    this.isKeyNeededToOpen = objectObject.isKeyNeededToOpen;
    this.itemToActivate = activationItem;
    this.triggerToActivate = activationTrigger;
    this.triggered = false;
    this.rejectDialog = objectObject.rejectDialog;
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