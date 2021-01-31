import Phaser from 'phaser';
import packFile from './assets/asset-pack.json';

import Database from './Model/DatabaseInterface.ts';
import Model from './Model/Model.ts';

import NewUser from './View/modals/NewUser.ts';
import SaveGame from './View/modals/SaveGame.ts';
import LoadGame from './View/modals/LoadGame.ts';

const database = new Database();
const model = new Model(database);
const newUser = new NewUser(model);
const saveGame = new SaveGame(model);
const loadGame = new LoadGame(model);

document.addEventListener('DOMContentLoaded', async () => {
  await model.newWorld();
  const game = new Phaser.Game(config);
  if (!(await model.getUsers())) newUser.init();
});

document.addEventListener('keypress', (event) => {
  if (event.code === 'KeyS' && event.shiftKey === true) {
    saveGame.init();
  }
});

document.addEventListener('keypress', (event) => {
  if (event.code === 'KeyL' && event.shiftKey === true) {
    loadGame.init();
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
    this.scene.start('SceneInterface', model);
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
      fps: 10,
    },
  },
  render: {
    pixelArt: true,
  },
  scene: MyGame,
};
