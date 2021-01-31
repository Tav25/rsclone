import './newUser.scss';
import Model from "../../Model/Model";

export default class NewUser {
  model: Model;

  constructor(model: Model) {
    this.model = model;
  }

  init() {
    const body = document.querySelector('body');

    const newUserWindow = document.createElement('div');
    newUserWindow.className = 'new-user';
    newUserWindow.innerHTML = `
      <div class="new-user-footer">
        <span class="new-user-footer-text">Yoda Stories</span>
      </div>

      <div class="new-user-form">
        <div class="new-user-form-text-container">
          <span class="new-user-form-text">Enter new or choose existed user:</span>
        </div>
        <div class="new-user-form-input-container">
        </div>
        <div class="new-user-form-buttons-container">
          <button type="button" class="new-user-form-button-ok">OK</button>
          <button type="button" class="new-user-form-button-cancel">Cancel</button>
        </div>
      </div>

      <div class="new-user-list">
      </div>
    `;

    const cancelButton = newUserWindow.querySelector('.new-user-form-button-cancel');
    const okButton = newUserWindow.querySelector('.new-user-form-button-ok');
    const inputContainer = newUserWindow.querySelector('.new-user-form-input-container');
    const userListContainer = newUserWindow.querySelector('.new-user-list');
    const userList = document.createElement('select');
    userList.className = 'new-user-list-select';
    userList.size = 11;
    userListContainer.append(userList);
    const input = document.createElement('input');
    input.className = 'new-user-form-input';
    input.type = 'input';
    input.maxLength = 120;
    inputContainer.append(input);

    this.model.userList.forEach((user) => {
      const option = document.createElement('option');
      option.textContent = user.name;
      userList.append(option);
    })

    cancelButton.addEventListener('click', () => {
      if (this.model.user) {
        newUserWindow.remove();
      } else {
        input.value = 'You must register!';
        okButton.classList.add('disabled');
        setTimeout(() => {
          input.value = '';
          okButton.classList.remove('disabled');
        }, 3000)
      }
    });
    okButton.addEventListener('click', async () => {
      if (input.value) {
        if (await this.model.createUser(input.value)) {
          newUserWindow.remove();
        } else {
          input.value = 'Invalid user name!';
          okButton.classList.add('disabled');
          setTimeout(() => {
            input.value = '';
            okButton.classList.remove('disabled');
          }, 3000)
        }
      } else if (userList.value) {
        this.model.loadUser(userList.value);
        newUserWindow.remove();
      } else {
        input.value = 'You must register!';
        okButton.classList.add('disabled');
        setTimeout(() => {
          input.value = '';
          okButton.classList.remove('disabled');
        }, 3000)
      }
    });
  
    body.append(newUserWindow);
  }
}