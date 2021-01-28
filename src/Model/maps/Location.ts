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
  objects: (Character | Crate | Door | Enemy | TradingPlace | Trigger)[];

  constructor(locationObject: TLocation) {
    this.locationObject = locationObject;
    this.name = locationObject.name;
    this.entryDirections = locationObject.entryDirections;
    this.objectList = locationObject.objectList;
    this.objects = [];
  }

  init(): void {
    this.objectList.forEach((object: TObject) => {
      let objectInstance: Character | Crate | Door | Enemy | TradingPlace | Trigger;
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
  }

  getName(): string {
    return this.name;
  }

  getEntryDirections(): string[] {
    return this.entryDirections;
  }

  getObjectList(): (Character | Crate | Door | Enemy | TradingPlace | Trigger)[] {
    return this.objects;
  }

  getObject(objectName: string): Character | Crate | Door | Enemy | TradingPlace | Trigger {
    const returnedObject = this.objects.find((object) => object.name === objectName);
    return returnedObject;
  }
}
