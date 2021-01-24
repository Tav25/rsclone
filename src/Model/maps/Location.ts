import Character from "../objects/Character";
import Crate from "../objects/Crate";
import Door from "../objects/Door";
import TradingPlace from "../objects/TradingPlace";
import Trigger from "../objects/Trigger";
import { TObject } from "../types/types";

export default class Location {
  name: string;
  entryDirections: string[];
  objectList: TObject[];
  objects: (Character | Crate | Door | TradingPlace | Trigger)[];

  constructor(name: string, entryDirections: string[], objectList: TObject[]) {
    this.name = name;
    this.entryDirections = entryDirections;
    this.objectList = objectList;
  }

  init(): void {
    const objects = [];
    this.objectList.forEach((object: TObject) => {
      if (object.type === 'character') {
        const objectInstance = new Character(object);
        objects.push(objectInstance);
      } else if (object.type === 'crate') {
        const objectInstance = new Crate();
        objects.push(objectInstance);
      } else if (object.type === 'door') {
        const objectInstance = new Door();
        objects.push(objectInstance);
      } else if (object.type === 'tradingPlace') {
        const objectInstance = new TradingPlace();
        objects.push(objectInstance);
      } else if (object.type === 'trigger') {
        const objectInstance = new Trigger();
        objects.push(objectInstance);
      }
    });
    this.objects = objects;
  }

  getName(): string {
    return this.name;
  }

  getEntryDirections(): string[] {
    return this.entryDirections;
  }

  getObject(objectID: string): Character | Crate | Door | TradingPlace | Trigger {
    const returnedObject = this.objects.find((object: Character | Crate | Door | TradingPlace | Trigger) => object.id === objectID);
    return returnedObject;
  }
}
