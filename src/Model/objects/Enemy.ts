import MainCharacter from "../character/MainCharacter";
import { TIcon, TItem, TObject } from "../types/types";
import CommonObject from "./CommonObject";
import ItemOnTheGround from "./ItemOnTheGround";

export default class Enemy extends CommonObject {
  health: number;
  damage: number;
  range: number;
  returnedItem?: TItem;
  isMoving?: boolean;
  openedIcon?: TIcon;

  constructor(objectObject: TObject) {
    super(objectObject);
    this.health = objectObject.health;
    this.damage = objectObject.damage;
    this.range = objectObject.range;
    this.returnedItem = objectObject.returnedItem;
    this.isMoving = objectObject.isMoving;
    this.openedIcon = objectObject.openedIcon;
  }

  activate(): void {}

  shot(): Enemy {
    return this;
  }

  hit(mainCharacter: MainCharacter) {
    const newHealth: number = this.health - mainCharacter.equipment.equippedWeapon.damage;
    this.health = newHealth >= 0 ? newHealth : 0;
  }

  isDead(): boolean {
    return !this.health;
  }

  dead(): ItemOnTheGround {
    if (this.isDead()) {
      this.triggered = true;
      this.icon = this.openedIcon;
      if (this.returnedItem) return new ItemOnTheGround(this, this.returnedItem);
    };
  }
}