import { TItem } from '../types/types.ts';

export default class Inventory {
  itemList: TItem[];
  inventorySize: number;

  constructor() {
    this.itemList = [];
    this.inventorySize = 0;
  }

  getItemList(): TItem[] {
    return this.itemList;
  }

  addItem(itemObject: TItem): void {
    this.itemList.push(itemObject);
    this.inventorySize += 1;
  }

  removeItem(id: string): void {
    const removedItemIndex: number = this.itemList.findIndex((item) => item.id === id);
    this.itemList.splice(removedItemIndex, 1);
    this.inventorySize -= 1;
  }
}