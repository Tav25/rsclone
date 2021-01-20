import Database from '../Database';

export default class User {
  database: Database;
  name: string;

  constructor(database: Database) {
    this.database = database;
    this.name = 'John Doe';
  }

  setUserName(name: string): boolean {
    if ((/[\/|\\|\.|\"|\$|\*|\<|\>|\:|\||\?]/).test(name) || name === '' || name.startsWith('system.') || name.length >= 120) return false;
    this.name = name;
    return true;
  }

  getUserName(): string {
    return this.name;
  }

  async getUserList() {
    const userList = await this.database.getAll('userProfiles')
  }
}