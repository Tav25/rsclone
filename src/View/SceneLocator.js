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
    const map = this.add.tilemap(this.mainMap);
    map.addTilesetImage('sprites', 'sprites');

    // lay1
    const lay1 = map.createLayer('bottomLayer', ['sprites'], 9, 52);
    // lay2
  }

  /* START-USER-CODE */

  update() {
    if (!this.gameSet.locatorScene) { 
      this.scene.stop('SceneLocator'); 
      this.scene.start('world1scene1');
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
