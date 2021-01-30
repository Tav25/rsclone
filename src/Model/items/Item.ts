import { TItem } from '../types/types';

export default class Item {
  itemObject: TItem;
  type: string;
  id: string;
  name: string;
  icon: string;

  constructor(itemObject: TItem) {
    this.itemObject = itemObject;
    this.type = itemObject.type;
    this.id = itemObject.id;
    this.name = itemObject.name;
    this.icon = itemObject.icon;
  }
}
