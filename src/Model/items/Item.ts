import { TItem } from '../../Types/types';

export default class Item {
  id: number;
  name: string;
  icon: string;
  imagePath: string;
  isEquippable: boolean;
  isConsumable: boolean;
  isUsable: boolean;
  isQuestItem: boolean;

  constructor(itemObject: TItem) {
    this.id = itemObject.id;
    this.name = itemObject.name;
    this.icon = itemObject.icon;
    this.imagePath = itemObject.imagePath;
    this.isEquippable = itemObject.isEquippable;
    this.isConsumable = itemObject.isConsumable;
    this.isUsable = itemObject.isUsable;
    this.isQuestItem = itemObject.isQuestItem;
  }
}
