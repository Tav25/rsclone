import { TIcon, TObject } from "../types/types";
import Position from "../character/Position";

export default class CommonObject {
  position: Position;
  id: string;
  name: string;
  icon: TIcon;

  constructor(objectObject: TObject) {
    this.position = objectObject.position;
    this.id = objectObject.id;
    this.name = objectObject.name;
    this.icon = objectObject.icon;
  }
}