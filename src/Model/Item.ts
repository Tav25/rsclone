import { TItem } from '../Types/types';

export default class Item {
  name: string;
  icon: string;
  isEquippable: boolean;
  isConsumable: boolean;
  isUsable: boolean;
  isQuestItem: boolean;

  constructor(itemObject: TItem) {
    this.name = itemObject.name;
    this.icon = itemObject.icon;
    this.isEquippable = itemObject.isEquippable;
    this.isConsumable = itemObject.isConsumable;
    this.isUsable = itemObject.isUsable;
    this.isQuestItem = itemObject.isQuestItem;
  }
}
