import MainCharacter from "../character/MainCharacter.ts";
import Position from "../character/Position.ts";
import { TIcon, TItem, TObject } from "../types/types.ts";
import ItemOnTheGround from "./ItemOnTheGround.ts";

export default class Enemy {
  objectObject: TObject;
  type: string;
  position: Position;
  id: string;
  name: string;
  icon: TIcon;
  health: number;
  damage: number;
  range: number;
  returnedItem?: TItem;
  isMoving?: boolean;

  constructor(objectObject: TObject) {
    this.objectObject = objectObject;
    this.type = objectObject.type;
    this.position = objectObject.position;
    this.id = objectObject.id;
    this.name = objectObject.name;
    this.icon = objectObject.icon;
    this.health = objectObject.health;
    this.damage = objectObject.damage;
    this.range = objectObject.range;
    this.returnedItem = objectObject.returnedItem;
    this.isMoving = objectObject.isMoving;
  }

  shot(): Enemy {
    return this;
  }

  hit(mainCharacter: MainCharacter) {
    const newHealth: number = this.health - mainCharacter.equipment.equippedWeapon.damage;
    this.health = newHealth >= 0 ? newHealth : 0;
  }

  isDead(): boolean {
    return !!this.health;
  }

  returnItem(): ItemOnTheGround {
    if (this.isDead()) return new ItemOnTheGround(this.objectObject, this.returnedItem);
  }
}