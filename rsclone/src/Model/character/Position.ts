export default class Position {
  location: string;
  coordinates: number[];
  direction: string;

  constructor(location: string, coordinates: number[], direction: string) {
    this.location = location;
    this.coordinates = coordinates;
    this.direction = direction;
  }
}