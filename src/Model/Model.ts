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

  constructor(database: Database) {
    this.database = database;
  }

  async newWorld(worldName: string = 'world1') {
    this.world = new World(await this.database.getOne('maps', worldName));
    this.world.init();
    return true;
  }

  async getUsers() {
    const userList = await this.database.getAll('userProfiles');
    this.userList = userList.map((user) => user.content);
    return true;
  }

  loadUser(userName: string): boolean {
    const user = this.userList.find((user: User) => user.name === userName);
    this.user = user;
    localStorage.setItem('tav25-levendor-rsclone-user', userName);
    return true;
  }

  async createUser(userName: string) {
    if ((/[\/|\\|\.|\"|\$|\*|\<|\>|\:|\||\?]/).test(userName) || userName === '' || userName.startsWith('system.') || userName.length >= 120) return false;
    if (this.userList.some((user: User) => user.name === userName)) return false;

    this.user = new User(userName);
    localStorage.setItem('tav25-levendor-rsclone-user', userName);
    await this.database.create('userProfiles', this.user.name, this.user);
    await this.getUsers();
    return true;
  }

  async getSavedGamesList() {
    const savedGamesList = await this.database.getList('savedGames', this.user.name);
    this.savedGamesList = savedGamesList.map((item: any) => item.content);
    return true;
  }

  loadGame(saveGameName: string): boolean {
    const saveGame = this.savedGamesList.find((saveGame: TSavedGame) => saveGame.name === saveGameName);
    this.world = saveGame.world;
    this.world.setCurrentTime();
    return true;
  }

  async saveGame(gameName: string, position: Position) {
    this.world.setFinishTime();
    this.world.setCurrentTime();
    this.world.mainCharacter.setPosition(position.location, position.coordinates, position.direction);

    const savedGame: TSavedGame = {
      name: gameName,
      world: this.world,
    };

    await this.database.create('savedGames', this.user.name, savedGame);

    this.user.increaseUserSavesNumber();

    await this.database.update('userProfiles', this.user.name, this.user);

    return true;
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