import './loadGame.scss';
import Model from "../../Model/Model";

export default class LoadGame {
  model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  init() {
    const body = document.querySelector('body');

    const loadGameWindow = document.createElement('div');
    loadGameWindow.className = 'load-game';
    loadGameWindow.innerHTML = `
      <div class="load-game-footer">
        <span class="load-game-footer-text">Yoda Stories</span>
      </div>
  
      <div class="load-game-form-text-container">
        <span class="load-game-form-text">Enter new or choose existed user:</span>
        <br>
        <span class="load-game-form-user"></span>
      </div>

      <div class="load-game-form">
        <div class="load-game-list">
        </div>
      </div>

      <div class="load-game-form-buttons-container">
        <button type="button" class="load-game-form-button-ok">OK</button>
        <button type="button" class="load-game-form-button-cancel">Cancel</button>
      </div>
    `;

    const cancelButton = loadGameWindow.querySelector('.load-game-form-button-cancel');
    const okButton = loadGameWindow.querySelector('.load-game-form-button-ok');
    const userText = loadGameWindow.querySelector('.load-game-form-user');
    userText.textContent = this.model.user.name;
  
    const loadGameListContainer = loadGameWindow.querySelector('.load-game-list');
    const loadGameList = document.createElement('select');
    loadGameList.className = 'load-game-list-select';
    loadGameList.size = 12;
    loadGameListContainer.append(loadGameList);

    this.model.savedGamesList.forEach((game) => {
      const option = document.createElement('option');
      option.textContent = game.name;
      loadGameList.append(option);
    })

    cancelButton.addEventListener('click', () => loadGameWindow.remove());

    okButton.addEventListener('click', async () => {
      if (loadGameList.value) {
        this.model.loadGame(loadGameList.value);
        this.model.world.setCurrentTime();
        loadGameWindow.remove();
      } else {
        userText.textContent = 'choose a world!';
        okButton.classList.add('disabled');
        setTimeout(() => {
          userText.textContent = this.model.user.name;
          okButton.classList.remove('disabled');
        }, 3000)
      }
    });
  
    body.append(loadGameWindow);
  }
}