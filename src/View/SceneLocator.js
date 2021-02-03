class SceneLocator extends Phaser.Scene {
  constructor(text = 'no') {
    super('SceneLocator');

    /** @type {Phaser.Tilemaps.TilemapLayer} */
    this.lay1;
    /** @type {Player} */
    this.player1;

    this.mainMap = 'LokatorMap';
  }

  init(model) {
    this.model = model;
  }

  create() {
    const bass = this.sound.add('locator'); bass.play();

    this.gameSet = this.cache.json.get('gameSettings');
    this.gameSet.mapArrows = [0, 0, 0, 0];

    this.map = this.add.tilemap(this.mainMap);
    this.map.addTilesetImage('sprites', 'sprites');

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


  update() {
    if (!this.gameSet.locatorScene) {
      this.scene.stop('SceneLocator');
      this.scene.start(this.model.world.mainCharacter.position.location);
    }
  }

  blinkObj(obj) {
    this.time.addEvent({
      repeat: -1,
      delay: 500,
      callback: () => {
        obj.visible = !obj.visible;
      },
    });
  }

}

