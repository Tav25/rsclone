// import TopMenu from '../Menu';

/* START OF COMPILED CODE */

class world1scene6 extends Phaser.Scene {
  constructor(text = 'no') {
    super('world1scene6');

    /** @type {Phaser.Tilemaps.TilemapLayer} */
    this.lay1;
    /** @type {Player} */
    this.player1;

    /* START-USER-CTR-CODE */
    this.mainMap = 'map6';
    /* END-USER-CTR-CODE */
    console.log(text);
  }

  create() {
    this.gameSet = this.cache.json.get('gameSettings');
    this.gameSet.mapArrows = [0, 0, 1, 0];
    // player1
    this.player1 = new Player(this, this.gameSet.hero.x, this.gameSet.hero.y);

    // map
    const map = this.add.tilemap(this.mainMap);
    map.addTilesetImage('sprites', 'sprites');

    // lay1
    const lay1 = map.createLayer('bottomLayer', ['sprites'], 0, 0);
    // lay2
    const lay2 = map.createLayer('middleLayer', ['sprites'], 0, 0);

    this.add.existing(this.player1);

    const lay3 = map.createLayer('topLayer', ['sprites'], 0, 0);

    this.lay1 = lay1;
    this.lay2 = lay2;
    // this.player1 = player1;

    const camera = this.cameras.main;
    camera.startFollow(this.player1);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.setViewport(9, 52, 288, 288);
    this.map = map;
    this.camera = camera;

    this.cursors = this.input.keyboard.createCursorKeys();
    //
    
    this.text = this.add.text(10, 10).setScrollFactor(0).setFontSize(12).setColor('#273746');

    const keyObj = this.input.keyboard.addKey('W'); // Get key object
    keyObj.on('down', (event) => {
      console.log('w');
      // this.scene.remove('SceneInterface');

      console.log(this.mainMap);
      console.log(this.player1.onMap);
    });

    keyObj.on('up', (event) => { /* ... */ });

    const returnToScene1 = new RectanglePhysics(this, 130, 290, 28, 18, () => { this.gameSet.hero.x = 432; this.gameSet.hero.y = 250; this.scene.stop('world1scene6'); this.scene.start('world1scene1'); });

    this.lay2.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player1, this.lay2);//
  }

  /* START-USER-CODE */

  update() {
    this.player1.movePlayer(this.cursors);

    if (this.gameSet.locatorScene) {
      this.gameSet.hero.x = this.player1.x;
      this.gameSet.hero.y = this.player1.y;
      this.scene.start('SceneLocator');
    }

    this.text.setText([
      `Player X: ${this.player1.x}`,
      `Player Y: ${this.player1.y}`,
      `ScrollX: ${this.camera.scrollX}`,
      `ScrollY: ${this.camera.scrollY}`,
      `MidX: ${this.camera.midPoint.x}`,
      `MidY: ${this.camera.midPoint.y}`,
      `Map: ${this.mainMap}`,
      `Gmset: ${this.gameSet.locatorScene}`,
    ]);
    
  }

  stopScene(scene, x, y, location) {
    scene.gameSet.hero.x = x;
    scene.gameSet.hero.y = y;
    scene.gameSet.currentLocation = location;
    scene.scene.stop(location);
    console.log(location);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
