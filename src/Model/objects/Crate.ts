import CommonObject from './CommonObject';
import { TIcon, TItem, TObject } from '../types/types';
import ItemOnTheGround from './ItemOnTheGround';
import Junk from '../items/Junk';
import QuestItem from '../items/QuestItem';

export default class Crate extends CommonObject {
  openedIcon: TIcon;
  returnedItem: TItem;

  constructor(objectObject: TObject) {
    super(objectObject);
    this.openedIcon = objectObject.openedIcon;
    this.returnedItem = objectObject.returnedItem;
  }

  activate(itemInstance: Junk | QuestItem): ItemOnTheGround {
    if (!this.isFirstVisit) {
      if (this.isKeyNeededToOpen) {
        if (this.isValidKey(itemInstance)) {
          this.triggered = true;
          this.icon = this.openedIcon;
          return new ItemOnTheGround(this, this.returnedItem);
        }
      } else if (this.triggerToActivate) {
        if (this.isTriggered()) {
          this.triggered = true;
          this.icon = this.openedIcon;
          return new ItemOnTheGround(this, this.returnedItem);
        }
      } else {
        this.triggered = true;
        this.icon = this.openedIcon;
        return new ItemOnTheGround(this, this.returnedItem);
      }
    }
  }
}