export default class Statistics {
  ratings: number[];
  lastRating: number;
  maxRating: number;
  winCount: number;
  loseCount: number;

  constructor(stats?: Statistics) {
    this.ratings = stats ? stats.ratings : [];
    this.lastRating = stats ? stats.lastRating : 0;
    this.maxRating = stats ? stats.maxRating : 0;
    this.winCount = stats ? stats.winCount : 0;
    this.loseCount = stats ? stats.loseCount : 0;
  }

  getStatistics(): Statistics {
    return this;
  }

  setStatistics(rating: number, isWin: boolean): void {
    if (isWin) {
      this.ratings.push(rating);
      this.lastRating = rating;
      this.maxRating = Math.max(...this.ratings);
      this.winCount += 1;
    } else this.loseCount += 1;
  }
}