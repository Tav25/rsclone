import { TGoal, TIcon, TItem, TObject } from "../types/types";
import CommonObject from "./CommonObject";

export default class Door extends CommonObject{
  openedIcon: TIcon;
  isKeyNeededToOpen: boolean;
  itemToActivate: string;
  triggerToActivate: TGoal;
  triggered: boolean;

  constructor(objectObject: TObject, activationItem?: TItem, activationTrigger?: TObject) {
    super(objectObject);
    this.openedIcon = objectObject.openedIcon;
    this.isKeyNeededToOpen = objectObject.isKeyNeededToOpen;
    this.itemToActivate = activationItem.name;
    this.triggerToActivate = {
      location: activationTrigger.position.location,
      target: activationTrigger.name,
      triggered: activationTrigger.triggered,
    };
    this.triggered = false;
  }

  isValidKey(itemObject: TItem): boolean {
    return itemObject.id === this.itemToActivate;
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