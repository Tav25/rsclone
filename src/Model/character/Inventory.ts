import Junk from '../items/Junk';
import Locator from '../items/Locator';
import MedKit from '../items/MedKit';
import QuestItem from '../items/QuestItem';
import Weapon from '../items/Weapon';

export default class Inventory {
  itemList: (Junk | Locator | MedKit | QuestItem | Weapon)[];
  inventorySize: number;

  constructor() {
    this.itemList = [];
    this.inventorySize = 0;
  }

  getItemList(): (Junk | Locator | MedKit | QuestItem | Weapon)[] {
    return this.itemList;
  }

  getItem(itemName: string) {
    if (this.hasItem(itemName)) {
      return this.itemList.find((item) => item.name === itemName);
    }
  }

  addItem(item: Junk | Locator | MedKit | QuestItem | Weapon): void {
    this.itemList.push(item);
    this.inventorySize += 1;
  }

  removeItem(itemName: string): void {
    if (this.hasItem(itemName)) {
      const removedItemIndex: number = this.itemList.findIndex((item) => item.name === itemName);
      this.itemList.splice(removedItemIndex, 1);
      this.inventorySize -= 1;
    }
  }

  hasItem(itemName: string): boolean {
    const index = this.itemList.findIndex((item) => item.name === itemName);
    return index === -1 ? false : true;
  }
}