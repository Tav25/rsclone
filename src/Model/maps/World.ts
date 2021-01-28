import MainCharacter from '../character/MainCharacter';
import Position from '../character/Position';
import { TGoal, TLocation, TWorld } from '../types/types';
import Location from './Location';

export default class World {
  worldObject:TWorld;
  id: string;
  name: string;
  goal: TGoal;
  map: string;
  startLocation: Position;
  locationList: TLocation[];
  locations: Location[];
  mainCharacter: MainCharacter;
  worldSize: number;
  startTime: number;
  elapsedTime: number;

  constructor(worldObject: TWorld) {
    this.worldObject = worldObject;
    this.id = worldObject.id;
    this.name = worldObject.name;
    this.goal = {
      name: worldObject.goal,
      target: undefined,
    }
    this.map = worldObject.map;
    this.startLocation = worldObject.startLocation;
    this.locationList = worldObject.locations;
    this.worldSize = this.locationList.length;
  }

  init() {
    this.locationList.forEach((location: TLocation) => this.locations.push(new Location(location)));
    this.locations.forEach((location) => {
      const target = location.objects.find((object) => object.name === this.goal.name);
      if (target) {
        this.goal.target = target;
      };
    });
    this.mainCharacter = new MainCharacter(this.startLocation);
    this.startTime = Date.now();
    this.elapsedTime = 0;
  }

  setCurrentTime(): void {
    this.startTime = Date.now();
  }

  setFinishTime(): void {
    const finishTime: number = Date.now();
    this.elapsedTime += finishTime - this.startTime;
  }

  isWin(): boolean {
    return this.goal.target.triggered;
  }

  isLose(): boolean {
    return this.mainCharacter.isDead();
  }
}