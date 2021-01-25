// import TopMenu from '../Menu';

/* START OF COMPILED CODE */

class world1scene1 extends Phaser.Scene {
  constructor() {
    super('world1scene1');

    /** @type {Phaser.Tilemaps.TilemapLayer} */
    this.lay1;
    /** @type {Player} */
    this.player1;

    /* START-USER-CTR-CODE */
    this.mainMap = 'map1';
    /* END-USER-CTR-CODE */
  }

  create() {
    const gameSet = this.cache.json.get('gameSettings');
    console.log(gameSet);
    // player1
    this.player1 = new Player(this, gameSet.hero.x, gameSet.hero.y);
    if (!this.player1.onMap) { this.mainMap = 'map1'; }

    // map
    const map = this.add.tilemap(this.mainMap);
    map.addTilesetImage('sprites', 'sprites');

    // lay1
    const lay1 = map.createLayer('bottomLayer', ['sprites'], 0, 0);
    // lay2
    const lay2 = map.createLayer('middleLayer', ['sprites'], 0, 0);

    this.add.existing(this.player1);

    // rectangle
    this.rectangleTop = this.add.rectangle(0, -2, map.widthInPixels, 3);
    this.rectangleTop.setOrigin(0, 0);
    this.rectangleTop.visible = false;
    this.rectangleTop.isFilled = true;
    new Physics(this.rectangleTop);

    this.rectangleLeft = this.add.rectangle(-2, 0, 3, map.heightInPixels);
    this.rectangleLeft.setOrigin(0, 0);
    this.rectangleLeft.visible = false;
    this.rectangleLeft.isFilled = true;
    new Physics(this.rectangleLeft);

    this.rectangleBottom = this.add.rectangle(0, 575, map.widthInPixels, 3);
    this.rectangleBottom.setOrigin(0, 0);
    this.rectangleBottom.visible = false;
    this.rectangleBottom.isFilled = true;
    new Physics(this.rectangleBottom);

    this.rectangleRight = this.add.rectangle(575, 0, 3, map.heightInPixels);
    this.rectangleRight.setOrigin(0, 0);
    this.rectangleRight.visible = false;
    this.rectangleRight.isFilled = true;
    new Physics(this.rectangleRight);

    const objectOnTheSceneInterface = new ObjectOnTheScene(this, 221, 184);
    // this.add.existing(objectOnTheSceneInterface);
    // objectOnTheSceneInterface.replaceObjectImage();

    this.lay1 = lay1;
    this.lay2 = lay2;
    // this.player1 = player1;

    const camera = this.cameras.main;
    camera.startFollow(this.player1);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.setViewport(10, 50, 288, 288);
    this.camera = camera;

    this.map = map;

    this.cursors = this.input.keyboard.createCursorKeys();
    //
    console.log(map.heightInPixels);
    this.text = this.add.text(10, 10).setScrollFactor(0).setFontSize(12).setColor('#273746');

    const keyObj = this.input.keyboard.addKey('W'); // Get key object
    keyObj.on('down', (event) => {
      console.log('w');
      // this.scene.remove('SceneInterface');

      console.log(this.mainMap);
      console.log(this.player1.onMap);
    });

    keyObj.on('up', (event) => { /* ... */ });

    this.physics.add.overlap(this.player1, this.rectangleTop, () => { gameSet.hero.y = 545; gameSet.hero.x = this.player1.x; gameSet.hero.x = this.player1.x; this.scene.stop('world1scene1'); this.scene.start('world1scene2'); });
    this.physics.add.overlap(this.player1, this.rectangleRight, () => { gameSet.hero.x = 20; gameSet.hero.y = this.player1.y; this.scene.stop('world1scene1'); this.scene.start('world1scene3'); });
    this.physics.add.overlap(this.player1, this.rectangleBottom, () => { gameSet.hero.y = 20; gameSet.hero.x = this.player1.x; this.scene.stop('world1scene1'); this.scene.start('world1scene4'); });
    this.physics.add.overlap(this.player1, this.rectangleLeft, () => { gameSet.hero.x = 545; gameSet.hero.y = this.player1.y; this.scene.stop('world1scene1'); this.scene.start('world1scene5'); });

    this.lay2.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player1, this.lay2);//
  }

  /* START-USER-CODE */

  update() {
    this.text.setText([
      `Player X: ${this.player1.x}`,
      `Player Y: ${this.player1.y}`,
      `ScrollX: ${this.camera.scrollX}`,
      `ScrollY: ${this.camera.scrollY}`,
      `MidX: ${this.camera.midPoint.x}`,
      `MidY: ${this.camera.midPoint.y}`,
      `Map: ${this.mainMap}`,
    ]);
    this.player1.movePlayer(this.cursors);
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
