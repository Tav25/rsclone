import Database from './Database.ts';
import User from './user/User.ts';
import World from './maps/World.ts';
import Position from './character/Position.ts';
import { TSavedGame } from './types/types.ts';

export default class Model {
  database: Database;
  world: World;
  user: User;
  userList: User[];
  savedGamesList: any[];

  constructor(database: Database) {
    this.database = database;
  }

  async newWorld() {
    this.world = new World(await this.database.getOne('maps', 'world1'));
    this.world.init();
    return this.world;
  }

  async getUsers() {
    const userList = await this.database.getAll('userProfiles');
    this.userList = userList.map((user) => user.content);
    return this.userList;
  }

  loadUser(userName: string) {
    const user = this.userList.find((user: User) => user.name === userName);
    this.user = user;
    return user;
  }

  async createUser(userName: string) {
    if ((/[\/|\\|\.|\"|\$|\*|\<|\>|\:|\||\?]/).test(userName) || userName === '' || userName.startsWith('system.') || userName.length >= 120) return false;
    if (this.userList.some((user: User) => user.name === userName)) return false;

    this.user = new User(userName);
    await this.database.create('userProfiles', this.user.name, this.user);
    return true;
  }

  async getSavedGamesList() {
    const savedGamesList = await this.database.getList('savedGames', this.user.name);
    this.savedGamesList = savedGamesList.map((item: any) => item.content);
  }

  loadSaveGame(saveGameName: string): void {
    const saveGame = this.savedGamesList.find((saveGame: TSavedGame) => saveGame.name === saveGameName);
    this.world = saveGame.world;
    this.world.setCurrentTime();
  }

  async saveGame(gameName: string, position: Position) {
    this.world.setFinishTime();
    this.world.mainCharacter.setPosition(position.location, position.coordinates, position.direction);

    const savedGame: TSavedGame = {
      name: gameName,
      world: this.world,
    };

    await this.database.create('savedGames', this.user.name, savedGame);

    this.user.increaseUserSavesNumber();

    await this.database.update('userProfiles', this.user.name, this.user);
  }

  isFinishGame() {
    if (this.world.isWin()){
      this.world.setFinishTime();
      this.user.setUserStatistics(this.world.elapsedTime / 10, true);
      return true;
    } else if (this.world.isLose()) {
      this.user.setUserStatistics(this.world.elapsedTime, false);
      return true;
    } else return false
  }
}