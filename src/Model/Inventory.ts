import Item from './Item';
import Weapon from './Weapon';
import MedKit from './MedKit';
import Junk from './Junk';

export default class Inventory {
  itemList: Array<any>;
  inventorySize: number;

  constructor() {
    this.itemList = [];
    this.inventorySize = 0;
  }

  addItem(itemObject: any): void {
    this.itemList.push(itemObject);
    this.inventorySize += 1;
  }
}