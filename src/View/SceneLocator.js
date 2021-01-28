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
    console.log(text);
  }

  create() {
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

    // obj
    // const objectOnTheSceneInterface = new ObjectOnTheScene(this, 128 + 16, 128 + 16);
  }

  /* START-USER-CODE */

  update() {
    if (!this.gameSet.locatorScene) {
      this.scene.stop('SceneLocator');
      this.scene.start(this.gameSet.currentLocation);
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
