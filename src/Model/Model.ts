import DatabaseInterface from './DatabaseInterface';
import User from './user/User';
import World from './maps/World';
import { TSavedGame } from './types/types';

export default class Model {
  database: DatabaseInterface;
  world: World;
  user: User;
  userList: User[];
  savedGamesList: any[];
  isBlocked: boolean;

  constructor(database: DatabaseInterface) {
    this.database = database;
    this.isBlocked = false;
  }

  async newWorld(worldName: string = 'world1') {
    this.world = new World(await this.database.getOne('maps', worldName));
    this.world.init();
    return true;
  }

  async getUsers() {
    const userList = await this.database.getAll('userProfiles');
    this.userList = userList.map((user: any) => user.content);
    if (!!localStorage.getItem('tav25-levendor-rsclone-user')) {
      const userObject: User = this.userList.find((user) => user.name === localStorage.getItem('tav25-levendor-rsclone-user'));
      this.user = new User(userObject.name, userObject.savesNumber, userObject.statistics);
      await this.getSavedGamesList();
      return this.user;
    } else return false;
  }

  async loadUser(userName: string) {
    const user = this.userList.find((user: User) => user.name === userName);
    this.user = user;
    await this.getSavedGamesList();
    localStorage.setItem('tav25-levendor-rsclone-user', userName);
    return true;
  }

  async createUser(userName: string) {
    if ((/[\/|\\|\.|\"|\$|\*|\<|\>|\:|\||\?]/).test(userName) || userName === '' || userName.startsWith('system.') || userName.length >= 120) return false;
    if (this.userList.some((user: User) => user.name === userName)) return false;

    this.user = new User(userName, 0);
    localStorage.setItem('tav25-levendor-rsclone-user', userName);
    await this.database.create('userProfiles', this.user.name, this.user);
    await this.getSavedGamesList();
    this.userList.push(this.user);
    return true;
  }

  async getSavedGamesList() {
    const savedGamesList = await this.database.getList('savedGames', this.user.name);
    this.savedGamesList = savedGamesList.map((item: any) => item.content);
    return true;
  }

  loadGame(saveGameName: string): boolean {
    const saveGame = this.savedGamesList.find((saveGame: TSavedGame) => saveGame.name === saveGameName);
    this.world = new World(saveGame.world);
    this.world.init();
    return true;
  }

  async saveGame(gameName: string) {
    if ((/[\/|\\|\.|\"|\$|\*|\<|\>|\:|\||\?]/).test(gameName) || gameName === '' || gameName.startsWith('system.') || gameName.length >= 120) return false;

    this.world.setFinishTime();
    this.world.setCurrentTime();

    const savedGame: TSavedGame = {
      name: gameName,
      world: this.world.convertToTWorld(),
    };

    await this.database.create('savedGames', this.user.name, savedGame);

    this.user.savesNumber += 1;
    await this.database.update('userProfiles', this.user.name, this.user);

    await this.getSavedGamesList();

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