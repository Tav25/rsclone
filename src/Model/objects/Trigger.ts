import CommonObject from './CommonObject';
import { TItem, TObject } from '../types/types';

export default class Trigger extends CommonObject{
  isKeyNeededToOpen: boolean;
  itemToActivate: TItem;
  triggerToActivate: TObject;
  triggered: boolean
  greetingDialog: string;
  rejectDialog: string;
  acceptDialog: string;
  postDialog: string;
  isFirstVisit: boolean;

  constructor(objectObject: TObject, activationItem?: TItem, activationTrigger?: TObject) {
    super(objectObject);
    this.isKeyNeededToOpen = objectObject.isKeyNeededToOpen;
    this.itemToActivate = activationItem;
    this.triggerToActivate = activationTrigger
    this.greetingDialog = objectObject.greetingDialog;
    this.rejectDialog = objectObject.rejectDialog;
    this.acceptDialog = objectObject.acceptDialog;
    this.postDialog = objectObject.postDialog;
    this.triggered = false;
  }

  isValidKey(itemObject: TItem): boolean {
    return itemObject.id === this.itemToActivate.id;
  }

  isTriggered(): boolean {
    return this.triggerToActivate.triggered;
  }

  activate(itemObject?: TItem): void {
    if (!this.isKeyNeededToOpen || this.isTriggered() || this.isValidKey(itemObject)) {
      this.triggered = true;
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