export default class Location {
  name: string;
  entryDirections: string[];

  constructor(name: string, entryDirections: string[]) {
    this.name = name;
    this.entryDirections = entryDirections;
  }

  getName(): string {
    return this.name;
  }

  getEntryDirections(): string[] {
    return this.entryDirections;
  }
}