import Position from "../character/Position";
import { TItem, TObject } from "../types/types";

export default class ItemOnTheGround {
  returnedItem: TItem;
  icon: string;
  position: Position;

  constructor(objectObject: TObject) {
    this.position = objectObject.position;
    this.returnedItem = objectObject.returnedItem;
    this.icon = this.returnedItem.icon;
  }

  returnItem(): TItem {
    return this.returnedItem;
  }
}