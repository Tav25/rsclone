const logo = require('../../../assets/image/rs_school_js.svg') as string;

export default class About {
  init() {
    const body = document.querySelector('body');

    const aboutWindow = document.createElement('div');
    aboutWindow.className = 'about';
    aboutWindow.innerHTML = `
      <div class="about-footer">
        <span class="about-footer-text">Yoda Stories</span>
      </div>
  
      <div class="about-link-container">
        <a href="https://github.com/tav25">
          <span class="about-link">[GitHub] Tav25</span>
        </a>
        <a href="https://github.com/Levendor">
          <span class="about-link">[GitHub] Levendor</span>
        </a>
        <a href="https://rs.school/js/">
          <img  class="about-link-logo" src=${logo} alt="logo">
        </a>
      </div>

      <div class="about-buttons-container">
        <button type="button" class="about-button-ok">OK</button>
      </div>
    `;

    const okButton = aboutWindow.querySelector('.about-button-ok');
    okButton.addEventListener('click', () => aboutWindow.remove());
  
    body.append(aboutWindow);
  }
}