import { TObject } from "../Types/types";

export default class Location {
  name: string;
  entryDirections: string[];
  objects: TObject[];

  constructor(name: string, entryDirections: string[], objectList: TObject[]) {
    this.name = name;
    this.entryDirections = entryDirections;
    this.objects = objectList;
  }

  getName(): string {
    return this.name;
  }

  getEntryDirections(): string[] {
    return this.entryDirections;
  }

  getObject(objectID: number): TObject {
    const returnedObject = this.objects.find((object: TObject) => object.id === objectID);
    return returnedObject;
  }
}
