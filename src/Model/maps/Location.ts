import Character from "../objects/Character";
import Crate from "../objects/Crate";
import Door from "../objects/Door";
import Enemy from "../objects/Enemy";
import TradingPlace from "../objects/TradingPlace";
import Trigger from "../objects/Trigger";
import { TLocation, TObject } from "../types/types";

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
    this.objectList = locationObject.objectList;
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
      if (!!object.triggerToActivate.name) {
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
