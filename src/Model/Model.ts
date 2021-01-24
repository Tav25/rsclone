import Database from './Database';
import User from './user/User';
import World from './maps/World';
import Position from './character/Position';
import { TSavedGame } from './types/types';

export default class Model {
  database: Database;
  world: World;
  user: User;
  userList: User[];
  savedGamesList: any[];

  constructor() {
    this.database = new Database();
  }

  async newWorld() {
    this.world = new World(this.database);
    await this.world.init('1');
  }

  async getUsers() {
    const userList = await this.database.getAll('userProfiles');
    this.userList = userList;
  }

  loadUser(userName: string) {
    const user = this.userList.find((user: User) => user.name === userName);
    this.user = user;
  }

  async createUser(userName: string) {
    if ((/[\/|\\|\.|\"|\$|\*|\<|\>|\:|\||\?]/).test(userName) || userName === '' || userName.startsWith('system.') || userName.length >= 120) return false;
    if (this.userList.some((item: User) => item.name === userName)) return false;

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
  }

  async saveGame(gameName: string, position: Position) {
    this.world.setFinishTime();
    this.world.mainCharacter.setPosition(position.location, position.coordinates,position. direction);

    const savedGame: TSavedGame = {
      name: gameName,
      world: this.world,
    };

    await this.database.create('savedGames', this.user.name, savedGame);

    this.user.increaseUserSavesNumber();

    await this.database.update('userProfiles', this.user.name, this.user);
  }
}