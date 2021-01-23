import { TItem } from '../Types/types';

export default class Item {
  id: number;
  name: string;
  icon: string;

  constructor(itemObject: TItem) {
    this.id = itemObject.id;
    this.name = itemObject.name;
    this.icon = itemObject.icon;
  }
}
