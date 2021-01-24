import MainCharacter from '../character/MainCharacter';
import Database from '../Database';
import { TLocation, TWorld } from '../types/types';

export default class World {
  database: Database;
  mainCharacter: MainCharacter;
  world: TWorld;
  locations: TLocation[];
  worldSize: number;
  startTime: number;
  elapsedTime: number;

  constructor(database: Database) {
    this.database = database;
  }

  async init(worldId: string) {
    this.world = await this.database.getOne('maps', worldId);
    this.locations = this.world.locations;
    this.mainCharacter = new MainCharacter(this.world.startLocation);
    this.worldSize = this.locations.length;
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
}