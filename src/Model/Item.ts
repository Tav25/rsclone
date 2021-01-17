export default class Item {
  name: string;
  icon: string;
  isEquippable: boolean;
  isConsumable: boolean;
  isUsable: boolean;
  isQuestItem: boolean;

  constructor(itemObject: any) {
    this.name = itemObject.name;
    this.icon = itemObject.icon;
    this.isEquippable = itemObject.equippable;
    this.isConsumable = itemObject.consumable;
    this.isUsable = itemObject.usable;
    this.isQuestItem = itemObject.quest;
  }
}
