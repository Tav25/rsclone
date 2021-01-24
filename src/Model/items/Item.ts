import { TItem } from '../types/types';

export default class Item {
  id: string;
  name: string;
  icon: string;

  constructor(itemObject: TItem) {
    this.id = itemObject.id;
    this.name = itemObject.name;
    this.icon = itemObject.icon;
    this.getItem = () => itemObject;
  }

  getItem(): void {};
}
