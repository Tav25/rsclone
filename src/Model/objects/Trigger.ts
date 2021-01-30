import CommonObject from './CommonObject';
import { TIcon, TObject } from '../types/types';
import QuestItem from '../items/QuestItem';

export default class Trigger extends CommonObject{
  openedIcon: TIcon;

  constructor(objectObject: TObject) {
    super(objectObject);
    this.openedIcon = objectObject.openedIcon;
  }

  activate(itemInstance: QuestItem): void {
    if (!this.isFirstVisit) {
      if (this.isKeyNeededToOpen) {
        if (this.isValidKey(itemInstance)) {
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