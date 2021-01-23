import { TItem, TObject } from "../Types/types";
import CommonObject from "./CommonObject";

export default class Door extends CommonObject{
  openedIcon: string;
  isKeyNeededToOpen: boolean;
  itemToActivate: TItem;
  triggerToActivate: TObject;
  triggered: boolean;

  constructor(objectObject: TObject, activationItem?: TItem, activationTrigger?: TObject) {
    super(objectObject);
    this.openedIcon = objectObject.openedIcon;
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

  activate(itemObject?: TItem): void {
    if (!this.isKeyNeededToOpen || this.isTriggered() || this.isValidKey(itemObject)) {
      this.icon = this.openedIcon;
      this.triggered = true;
    }
  }
}