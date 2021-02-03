import QuestItem from "../items/QuestItem";
import { TIcon, TObject } from "../types/types";
import CommonObject from "./CommonObject";

export default class Door extends CommonObject{
  openedIcon: TIcon;

  constructor(objectObject: TObject) {
    super(objectObject);
    this.openedIcon = objectObject.openedIcon;
  }

  activate(itemInstance?: QuestItem): void {
    if (!this.isFirstVisit) {
      if (this.isKeyNeededToOpen) {
        if (this.isValidKey(itemInstance)) {
          this.triggered = true;
          this.icon = this.openedIcon;
        }
      } else if (this.isTriggerNeededToOpen) {
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