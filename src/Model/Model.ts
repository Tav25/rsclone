import Database from './Database';
import User from './user/User';
import World from './maps/World';

export default class Model {
  database: Database;
  world: World;
  user: User;

  constructor() {
  this.database = new Database();
  this.world = new World(this.database);
  }

  setUser(user: User) {
    this.user = user;
  }

  async createUser(userName: string) {
    if ((/[\/|\\|\.|\"|\$|\*|\<|\>|\:|\||\?]/).test(userName) || userName === '' || userName.startsWith('system.') || userName.length >= 120) return false;
    const userList = await this.getUsers();
    if (userList.some((item: User) => item.name === userName)) return false;
    this.user = new User(userName);
    const userInfo = {
      statistics: this.user.statistics,
      savesNumber: this.user.savesNumber,
    };
    await this.database.create('userProfiles', this.user.name, userInfo);
    return true;
  }

  async getUsers() {
    const userList = await this.database.getAll('userProfiles');
    return userList;
  }

  async saveGame(gameName: string, location: string, coordinates: number[], direction: string) {
    this.world.getFinishTime();
    this.world.mainCharacter.setPosition(location, coordinates, direction);
    const savedGame = {
      id: gameName,
      world: this.world,
    };
    await this.database.create('savedGames', this.user.name, savedGame);
    // const savesNumber = await this.database.getAll
    this.user.savesNumber += 1;
    const userInfo = {
      statistics: this.user.statistics,
      savesNumber: this.user.savesNumber,
    };
    await this.database.update('userProfiles', this.user.name, userInfo);
  }
}