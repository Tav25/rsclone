import { TIcon, TItem, TObject } from "../types/types";
import CommonObject from "./CommonObject";

export default class Door extends CommonObject{
  openedIcon: TIcon;

  constructor(objectObject: TObject) {
    super(objectObject);
    this.openedIcon = objectObject.openedIcon;
  }

  activate(itemObject: TItem): void {
    if (!this.isFirstVisit) {
      if (this.isKeyNeededToOpen) {
        if (this.isValidKey(itemObject)) {
          this.triggered = true;
          this.icon = this.openedIcon;
        }
      } else if (this.triggerToActivate) {
        if (this.isTriggered()) {
          this.triggered = true;
          this.icon = this.openedIcon;
        }
      } else {
        this.triggered = true;
        this.icon = this.openedIcon;
      }
    }
  }
}