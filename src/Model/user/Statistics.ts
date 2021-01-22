export default class Statistics {
  ratings: number[];
  lastRating: number;
  maxRating: number;
  winCount: number;
  loseCount: number;

  constructor() {
    this.ratings = [];
    this.lastRating = 0;
    this.maxRating = 0;
    this.winCount = 0;
    this.loseCount = 0;
  }

  getStatistics() {
    return this;
  }

  setStatistics(rating: number, isWin: boolean): void {
    this.ratings.push(rating);
    this.lastRating = rating;
    this.maxRating = Math.max(...this.ratings);
    if (isWin) this.winCount += 1;
    else this.loseCount += 1;
  }
}