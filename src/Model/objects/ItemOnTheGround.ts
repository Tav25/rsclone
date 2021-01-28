import Position from "../character/Position.ts";
import Junk from "../items/Junk.ts";
import Locator from "../items/Locator.ts";
import MedKit from "../items/MedKit.ts";
import QuestItem from "../items/QuestItem.ts";
import Weapon from "../items/Weapon.ts";
import { TItem, TObject } from "../types/types.ts";

export default class ItemOnTheGround {
  returnedItem: TItem;
  icon: string;
  position: Position;

  constructor(objectObject: TObject, itemObject: TItem) {
    this.position = objectObject.position;
    this.returnedItem = itemObject;
    this.icon = itemObject.icon;
  }

  returnItem() {
    switch(this.returnedItem.type) {
      case 'junk':
        return new Junk(this.returnedItem);
      case 'locator':
        return new Locator(this.returnedItem);
      case 'medkit':
        return new MedKit(this.returnedItem);
      case 'questItem':
        return new QuestItem(this.returnedItem);
      case 'weapon':
        return new Weapon(this.returnedItem);
      default:
        return null;
    }
  }
}