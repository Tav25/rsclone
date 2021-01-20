import MainCharacter from '../character/MainCharacter';
import Database from '../Database';

export default class World {
  database: Database;
  player: MainCharacter;
  world: any;
  locations: Location[];
  locationsNumber: number;
  startTime: number;

  constructor(database: Database) {
    this.database = database;
    this.player = new MainCharacter();
  }

  async init(worldId: string) {
    this.world = await this.database.getOne('maps', worldId);
    this.locations = this.world.locations;
    this.locationsNumber = this.locations.length;
    this.startTime = Date.now();
  }

  getFinishTime(): number {
    const finishTime: number = Date.now();
    return finishTime - this.startTime;
  }
}