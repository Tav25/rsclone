import './saveGame.scss';
import Model from "../../Model/Model";

export default class SaveGame {
  model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  init() {
    const body = document.querySelector('body');

    const saveGameWindow = document.createElement('div');
    saveGameWindow.className = 'save-game';
    saveGameWindow.innerHTML = `
      <div class="save-game-footer">
        <span class="save-game-footer-text">Yoda Stories</span>
      </div>

      <div class="save-game-form">
        <div class="save-game-form-text-container">
          <span class="save-game-form-text">Enter your world name:</span>
        </div>
        <div class="save-game-form-input-container">
        </div>
        <div class="save-game-form-buttons-container">
          <button type="button" class="save-game-form-button-ok">OK</button>
          <button type="button" class="save-game-form-button-cancel">Cancel</button>
        </div>
      </div>
    `;

    const cancelButton = saveGameWindow.querySelector('.save-game-form-button-cancel');
    const okButton = saveGameWindow.querySelector('.save-game-form-button-ok');
    const inputContainer = saveGameWindow.querySelector('.save-game-form-input-container');
    const input = document.createElement('input');
    input.className = 'save-game-form-input';
    input.type = 'input';
    input.maxLength = 120;
    inputContainer.append(input);

    cancelButton.addEventListener('click', () => saveGameWindow.remove());

    okButton.addEventListener('click', async () => {
      if (input.value) {
        if (await this.model.saveGame(input.value)) {
          saveGameWindow.remove();
        } else {
          input.value = 'Invalid name!';
          okButton.classList.add('disabled');
          setTimeout(() => {
            input.value = '';
            okButton.classList.remove('disabled');
          }, 3000)
        }
      } else {
        input.value = 'Invalid name!';
        okButton.classList.add('disabled');
        setTimeout(() => {
          input.value = '';
          okButton.classList.remove('disabled');
        }, 3000)
      }
    });
  
    body.append(saveGameWindow);
  }
}