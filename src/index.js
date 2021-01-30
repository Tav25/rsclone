import Phaser from 'phaser';
import packFile from './assets/asset-pack.json';

import Database from './Model/DatabaseInterface';
import Model from './Model/Model';

const database = new Database();
const model = new Model(database);

document.addEventListener('DOMContentLoaded', async () => {
  await model.newWorld();
  const game = new Phaser.Game(config);
});

// import Model from './Model/Model'
// const model  = new Model;
// import './testTemplate';

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
