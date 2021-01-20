import Database from '../Database';

export default class User {
  database: Database;
  name: string;
  statistics: {
    ratings: number[];
    lastRating: number;
    maxRating: number;
    winCount: number;
    loseCount: number;
  }

  constructor(database: Database) {
    this.database = database;
    this.name = 'John Doe';
    this.statistics = {
      ratings: [],
      lastRating: 0,
      maxRating: 0,
      winCount: 0,
      loseCount: 0,
    }
  }

  getUserName(): string {
    return this.name;
  }

  setUserName(name: string): boolean {
    if ((/[\/|\\|\.|\"|\$|\*|\<|\>|\:|\||\?]/).test(name) || name === '' || name.startsWith('system.') || name.length >= 120) return false;
    this.name = name;
    return true;
  }

  getStatistics() {
    return this.statistics;
  }

  setStatistics(rating: number, isWin: boolean): void {
    this.statistics.ratings.push(rating);
    this.statistics.lastRating = rating;
    this.statistics.maxRating = Math.max(...this.statistics.ratings);
    if (isWin) this.statistics.winCount += 1;
    else this.statistics.loseCount += 1;
  }

  async getUserList() {
    const userList = await this.database.getAll('userProfiles');
    return userList;
  }
}