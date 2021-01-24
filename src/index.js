import Phaser from 'phaser';
import packFile from './assets/asset-pack.json';
// import './testTemplate';

class MyGame extends Phaser.Scene {
  constructor() {
    super();
  }

  preload() {
    // this.load.image('logo', packFile);
    // this.load.pack('pack', packFile);
  }

  create() {
    // const logo = this.add.image(400, 150, 'logo');

    this.scene.start('Scene1');
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

const game = new Phaser.Game(config);
