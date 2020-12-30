import './scss/style.scss';

import Phaser from 'phaser';
import logoImg from './assets/image/yoda-main.png';
import sheepImg from './assets/image/sheep.png';

class MyGame extends Phaser.Scene
{
    constructor ()
    {
        super('MyGame');
    }

    preload ()
    {
        this.load.image('logo', logoImg);
        this.load.image('sheep', sheepImg);
        this.load.audio('bass', './assets/flourish.wav');
    }
      
    create ()
    {




        ///
        const logo = this.add.image(520/2, 350/2, 'logo');
        const sheep = this.add.image(-50, 200, 'sheep');

/////

const shape = this.make.graphics();
shape.fillStyle(0xff0000);
shape.beginPath();
shape.fillRect(50, 0, 300, 300);
// const mask = shape.createGeometryMask();
// logo.setMask(mask);
// this.input.on('pointermove', function (pointer) {
//     shape.x = pointer.x - 140;
//     shape.y = pointer.y - 140;
// });

        ////
        var bass = this.sound.add('bass');
        bass.play();
      
        this.tweens.add({
            targets:  sheep,
            x: 300,
            duration: 1000,
            // ease: "Power2",
            // yoyo: true,
            loop: 0
        });
        console.log('5555')
       this.time.addEvent({ delay: 5000, callback: () => {this.game.scene.start('SceneB')}, callbackScope: this, repeat: 0 });
       console.log('666')
        // timedEvent.paused = !timedEvent.paused;
        // this.game.scene.start('SceneB');
    }
}

class SceneB extends Phaser.Scene
{
    constructor ()
    {
        super('SceneB');
    }

    preload ()
    {
        this.load.image('logo', logoImg);
        // this.load.image('sheep', sheepImg);
    }
      
    create ()
    {
        const logo = this.add.image(520/2, 350/2, 'logo');
        // const sheep = this.add.image(-50, 200, 'sheep');
        console.log('333')
        // this.tweens.add({
        //     targets:  sheep,
        //     x: 200,
        //     duration: 1000,
        //     // ease: "Power2",
        //     // yoyo: true,
        //     loop: 0
        // });

        // this.cameras.main.setZoom(4);
        // this.game.scene.start("Menu");
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'phaser-game',
    width: 520,
    height: 350,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [ MyGame, SceneB ]
};

const game = new Phaser.Game(config);
