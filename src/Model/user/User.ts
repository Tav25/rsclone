import Statistics from './Statistics';

export default class User {
  name: string;
  statistics: Statistics;
  savedGames: any[];
  savesNumber: number;

  constructor(name: string = 'John Doe', statistics?: Statistics, savedGames?: any[]) {
    this.name = name;
    this.statistics = statistics ? statistics : new Statistics();
    this.savedGames = savedGames ? savedGames : [];
    this.savesNumber = this.savedGames.length;
  }

  getUserName(): string {
    return this.name;
  }
}
