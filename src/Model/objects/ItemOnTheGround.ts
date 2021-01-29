import Position from "../character/Position";
import Junk from "../items/Junk";
import Locator from "../items/Locator";
import MedKit from "../items/MedKit";
import QuestItem from "../items/QuestItem";
import Weapon from "../items/Weapon";
import { TItem, TObject } from "../types/types";

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