// import TopMenu from '../Menu';

/* START OF COMPILED CODE */

class SceneLocator extends Phaser.Scene {
  constructor(text = 'no') {
    super('SceneLocator');

    /** @type {Phaser.Tilemaps.TilemapLayer} */
    this.lay1;
    /** @type {Player} */
    this.player1;

    /* START-USER-CTR-CODE */
    this.mainMap = 'LokatorMap';
    /* END-USER-CTR-CODE */
    // console.log(text);
  }

  init(model) {
    this.model = model;
    // console.log('Locator:', this.model);
  }

  create() {
    const bass = this.sound.add('locator'); bass.play();

    this.gameSet = this.cache.json.get('gameSettings');
    this.gameSet.mapArrows = [0, 0, 0, 0];
    // player1

    // map
    this.map = this.add.tilemap(this.mainMap);
    this.map.addTilesetImage('sprites', 'sprites');

    // lay1
    const lay1 = this.map.createLayer('bottomLayer', ['sprites'], 0, 0);

    const camera = this.cameras.main;
    camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);
    camera.setViewport(9, 52, 288, 288);
    this.camera = camera;

    const mapPosition = {
      world1scene1: {
        x: 144,
        y: 144,
      },
      world1scene2: {
        x: 144,
        y: 114,
      },
      world1scene3: {
        x: 174,
        y: 144,
      },
      world1scene4: {
        x: 144,
        y: 174,
      },
      world1scene5: {
        x: 114,
        y: 144,
      },
      world1scene6: {
        x: 144,
        y: 144,
      },
    };
    const objectOnTheSceneInterface = new ObjectInBox(this, mapPosition[this.model.world.mainCharacter.position.location].x, mapPosition[this.model.world.mainCharacter.position.location].y, 'atlasPersonsObject', '837');
    this.blinkObj(objectOnTheSceneInterface);
  }

  /* START-USER-CODE */

  update() {
    if (!this.gameSet.locatorScene) {
      this.scene.stop('SceneLocator');
      this.scene.start(this.model.world.mainCharacter.position.location);
    }
  }

  blinkObj(obj) {
    // console.log('this++++', this);
    this.time.addEvent({
      repeat: -1,
      delay: 500,
      callback: () => {
        obj.visible = !obj.visible;
      },
    });
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
