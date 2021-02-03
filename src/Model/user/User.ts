import Statistics from './Statistics';

export default class User {
  name: string;
  statistics: Statistics;
  savesNumber: number;

  constructor(name: string = 'new user', savesNumber: number, statistics?: Statistics) {
    this.name = name;
    this.savesNumber = savesNumber;
    this.statistics = new Statistics(statistics);
  }

  getUserName(): string {
    return this.name;
  }

  getUserSavesNumber(): number {
    return this.savesNumber;
  }

  increaseUserSavesNumber(): void {
    this.savesNumber += 1;
  }

  getUserStatistics(): Statistics {
    return this.statistics.getStatistics();
  }

  setUserStatistics(rating: number, isWin: boolean): void {
    this.statistics.setStatistics(rating, isWin);
  }
}
