import CommonObject from './CommonObject';
import { TItem, TObject } from '../types/types';
import ItemOnTheGround from './ItemOnTheGround';
import QuestItem from '../items/QuestItem';

export default class Character extends CommonObject {
  returnedItem: TItem;

  constructor(objectObject: TObject) {
    super(objectObject);
    this.returnedItem = objectObject.returnedItem;
  }

  activate(itemInstance?: QuestItem): ItemOnTheGround {
    if (!this.isFirstVisit) {
      if (this.isKeyNeededToOpen) {
        if (this.isValidKey(itemInstance)) {
          this.triggered = true;
          return this.returnItem();
        }
      } else if (this.triggerToActivate.name) {
        if (this.isTriggered()) {
          this.triggered = true;
          return this.returnItem();
        }
      } else {
        this.triggered = true;
        return this.returnItem();
      }
    }
  }

  returnItem() {
    return new ItemOnTheGround(this, this.returnedItem);
  }

  // triggerTrigger() {
  //   this.activatedTrigger.target.triggered = true;
  // }
}
