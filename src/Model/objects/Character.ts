import CommonObject from './CommonObject';
import { TGoal, TItem, TObject } from '../types/types';

export default class Character extends CommonObject {
  isKeyNeededToOpen: boolean;
  returnedItem: TItem;
  itemToActivate: string;
  triggerToActivate: TGoal;
  triggered: boolean
  greetingDialog: string;
  rejectDialog: string;
  acceptDialog: string;
  postDialog: string;
  isFirstVisit: boolean;

  constructor(objectObject: TObject, itemObject?: TItem, activationItem?: TItem, activationTrigger?: TObject) {
    super(objectObject);
    this.returnedItem = itemObject;
    this.isKeyNeededToOpen = objectObject.isKeyNeededToOpen;
    this.itemToActivate = activationItem.name;
    this.triggerToActivate = {
      location: activationTrigger.position.location,
      target: activationTrigger.name,
      triggered: activationTrigger.triggered,
    };
    this.greetingDialog = objectObject.greetingDialog;
    this.rejectDialog = objectObject.rejectDialog;
    this.acceptDialog = objectObject.acceptDialog;
    this.postDialog = objectObject.postDialog;
    this.triggered = false;
    this.isFirstVisit = objectObject.isFirstVisit;
  }

  isValidKey(itemObject: TItem): boolean {
    return itemObject.id === this.itemToActivate;
  }

  isTriggered(): boolean {
    return this.triggerToActivate.triggered;
  }

  activate(itemObject?: TItem): TItem {
    if (!this.isKeyNeededToOpen || this.isTriggered() || this.isValidKey(itemObject)) {
      this.triggered = true;
      return this.returnedItem;
    }
  }

  getDialog(itemObject?: TItem): string {
    if (this.isFirstVisit) {
      this.isFirstVisit = false;
      if (!this.isKeyNeededToOpen) {
        return this.acceptDialog;
      }
      return this.greetingDialog;
    } else if (this.isTriggered() || this.isValidKey(itemObject)) {
      return this.acceptDialog;
    } else if (!this.triggered) {
      return this.rejectDialog;
    } else return this.postDialog;
  }
}