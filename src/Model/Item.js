export default class Item {
  constructor(itemObject) {
    this.name = itemObject.name;
    this.icon = itemObject.icon;
    this.equippable = itemObject.equippable;
    this.consumable = itemObject.consumable;
    this.usable = itemObject.usable;
    this.quest = itemObject.quest;
  }
}
