import Character from "../objects/Character.ts";
import Crate from "../objects/Crate.ts";
import Door from "../objects/Door.ts";
import Enemy from "../objects/Enemy.ts";
import TradingPlace from "../objects/TradingPlace.ts";
import Trigger from "../objects/Trigger.ts";
import { TLocation, TObject } from "../types/types.ts";

export default class Location {
  locationObject: TLocation;
  name: string;
  entryDirections: string[];
  objectList: TObject[];
  objects: any[];

  constructor(locationObject: TLocation) {
    this.locationObject = locationObject;
    this.name = locationObject.name;
    this.entryDirections = locationObject.entryDirections;
    this.objectList = locationObject.objects;
    this.objects = [];
  }

  init(): void {
    this.objectList.forEach((object: TObject) => {
      let objectInstance;
      switch (object.type) {
        case 'character':
          objectInstance = new Character(object);
          break;
        case 'crate':
          objectInstance = new Crate(object);
          break;
        case 'door':
          objectInstance = new Door(object);
          break;
        case 'enemy':
          objectInstance = new Enemy(object);
          break;
        case 'tradingPlace':
          objectInstance = new TradingPlace(object);
          break;
        case 'trigger':
          objectInstance = new Trigger(object);
          break;
        default:
          break;
      }
      this.objects.push(objectInstance);
    });
    this.objects.forEach((object, index, array) => {
      const hasTrigger = !!object.triggerToActivate && !!object.triggerToActivate.name;
      if (hasTrigger) {
        object.triggerToActivate.target = array.find((object) => object.name === object.triggerToActivate.name);
      }
    })
  }

  getName(): string {
    return this.name;
  }

  getEntryDirections(): string[] {
    return this.entryDirections;
  }

  getObjectList() {
    return this.objects;
  }

  getObject(objectName: string) {
    const returnedObject = this.objects.find((object) => object.name === objectName);
    return returnedObject;
  }
}
