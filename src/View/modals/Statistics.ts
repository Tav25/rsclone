import Model from '../../Model/Model';
import './statistics.scss';
const yoda = require('../../assets/image/yoda.png') as string;

export default class statistics {
  model: Model;
  constructor(model: Model) {
    this.model = model;
  }

  init() {
    const body = document.querySelector('body');

    const statisticsWindow = document.createElement('div');
    statisticsWindow.className = 'statistics';
    statisticsWindow.innerHTML = `
      <div class="statistics-footer">
        <span class="statistics-footer-text">Yoda Stories</span>
        <button type="button" class="statistics-footer-close">
        </button>
      </div>
  
      <div class="statistics-container">
        <div class="statistics-image">
          <image src=${yoda} alt="logo">
        </div>
        <div class="statistics-lines">
  
          <div class="statistics-line">
            <span class="statistics-line-text">High Score</span>
            <div class="statistics-line-outer">
              <div id="highScore" class="statistics-line-inner">${this.model.user.statistics.maxRating}</div>
            </div>
          </div>
  
          <div class="statistics-line">
            <span class="statistics-line-text">Last Score</span>
            <div class="statistics-line-outer">
            <div id="lastScore" class="statistics-line-inner">${this.model.user.statistics.lastRating}</div>
            </div>
          </div>
          <div class="statistics-line">
            <span class="statistics-line-text">Games Won</span>
            <div class="statistics-line-outer">
            <div id="gamesWon" class="statistics-line-inner">${this.model.user.statistics.winCount}</div>
            </div>
          </div>
          <div class="statistics-line">
            <span class="statistics-line-text">Games Lost</span>
            <div class="statistics-line-outer">
            <div id="gamesLost" class="statistics-line-inner">${this.model.user.statistics.loseCount}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    const closeButton = statisticsWindow.querySelector('.statistics-footer-close');
    closeButton.addEventListener('click', () => statisticsWindow.remove());
  
    body.append(statisticsWindow);
  }
}