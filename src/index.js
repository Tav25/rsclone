import Phaser from 'phaser';
import packFile from './assets/asset-pack.json';

import Database from './Model/DatabaseInterface.ts';
import Model from './Model/Model.ts';
import ModalWindow from './View/modal/ModalWindow.ts';

const database = new Database();
const model = new Model(database);
const modalWindow = new ModalWindow(model);

document.addEventListener('DOMContentLoaded', async () => {
  await model.newWorld();
  const game = new Phaser.Game(config);
  if (!(await model.getUsers())) modalWindow.newUser.init();
});

document.addEventListener('keypress', (event) => {
  if (event.code === 'KeyN' && event.shiftKey === true) {
    modalWindow.newUser.init();
  }
  if (event.code === 'KeyS' && event.shiftKey === true) {
    modalWindow.saveGame.init();
  }
  if (event.code === 'KeyL' && event.shiftKey === true) {
    modalWindow.loadGame.init();
  }
  if (event.code === 'KeyA' && event.shiftKey === true) {
    modalWindow.about.init();
  }
  if (event.code === 'KeyP' && event.shiftKey === true) {
    modalWindow.statistics.init();
  }
});

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    // this.load.image('logo', packFile);
    this.load.pack('pack', packFile);
  }

  create() {
    // const logo = this.add.image(400, 150, 'logo');
    this.scene.start('SceneInterface', { model, modalWindow });
  }
}

const config = {
  width: 520,
  height: 350,
  type: Phaser.AUTO,
  backgroundColor: '#242424',
  scale: {
    mode: Phaser.Scale.NONE,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: true,
      fps: 60,
    },
  },
  render: {
    pixelArt: true,
  },
  scene: MyGame,
  
};
