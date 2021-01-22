import Statistics from './Statistics';

export default class User {
  name: string;
  statistics: Statistics;
  savedGames: any[];

  constructor(statistics: Statistics = new Statistics(), savedGames: any[] = []) {
    this.name = 'John Doe';
    this.statistics = statistics;
    this.savedGames = savedGames;
  }

  getUserName(): string {
    return this.name;
  }

  setUserName(name: string): boolean {
    if ((/[\/|\\|\.|\"|\$|\*|\<|\>|\:|\||\?]/).test(name) || name === '' || name.startsWith('system.') || name.length >= 120) return false;
    this.name = name;
    return true;
  }
}