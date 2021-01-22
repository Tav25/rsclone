import MainCharacter from '../character/MainCharacter';
import Database from '../Database';

export default class World {
  database: Database;
  mainCharacter: MainCharacter;
  world: any;
  locations: Location[];
  locationsNumber: number;
  startTime: number;
  currentTime = 0;

  constructor(database: Database) {
    this.database = database;
    this.mainCharacter = new MainCharacter();
  }

  async init(worldId: string) {
    this.mainCharacter = new MainCharacter();
    this.world = await this.database.getOne('maps', worldId);
    this.locations = this.world.locations;
    this.locationsNumber = this.locations.length;
    this.startTime = Date.now();
  }

  getFinishTime(): number {
    const finishTime: number = Date.now();
    this.currentTime += finishTime - this.startTime;
    return this.currentTime;
  }
}