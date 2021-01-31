// import TopMenu from '../Menu';

/* START OF COMPILED CODE */

class world1scene4 extends Phaser.Scene {
  constructor() {
    super('world1scene4');

    /** @type {Phaser.Tilemaps.TilemapLayer} */
    this.lay1;
    /** @type {Player} */
    this.player1;

    /* START-USER-CTR-CODE */
    this.mainMap = 'map4';
    // this.sceneName = this.scene.key
  }

  init(model) {
    this.model = model;
    // console.log('sc1:', this.model);
  }

  create() {
    this.gameSet = this.cache.json.get('gameSettings');
    this.gameSet.mapArrows = [1, 0, 0, 0];

    this.map = this.add.tilemap(this.mainMap);
    this.map.addTilesetImage('sprites', 'sprites');

    this.lay1 = this.map.createLayer('bottomLayer', ['sprites'], 0, 0);
    this.lay2 = this.map.createLayer('middleLayer', ['sprites'], 0, 0);

    this.player1 = new Player(this);
    this.add.existing(this.player1);

    // camera
    const camera = new GameCamera(this);

    // cursor
    this.cursors = this.input.keyboard.createCursorKeys();

    // dialog
    this.dialog = new Dialog(this);
    // objects
    const items = new Item(this);
    items.ItemsOnScene();

    const b3 = new ObjectOnTheScene(this);
    b3.ItemsOnScene();

    const rectangleTop = new RectanglePhysics(this, 0, -2, this.map.widthInPixels, 3, () => { this.gameSet.hero.y = 545, this.scene.stop('world1scene4'); this.scene.start('world1scene1'); });
    const rectangleLeft = new RectanglePhysics(this, -2, 0, 3, this.map.heightInPixels, () => { this.gameSet.hero.x = 545; this.gameSet.hero.y = this.player1.y; });
    const rectangleBottom = new RectanglePhysics(this, 0, 575, this.map.widthInPixels, 3, () => { this.gameSet.hero.y = 20; this.gameSet.hero.x = this.player1.x; });
    const rectangleRight = new RectanglePhysics(this, 576, 0, 3, 576, () => { this.gameSet.hero.x = 20; this.gameSet.hero.y = this.player1.y; });

    // text
    // this.text = this.add.text(10, 10).setScrollFactor(0).setFontSize(12).setColor('#273746');

    // key
    const keyObj = this.input.keyboard.addKey('W'); // Get key object
    keyObj.on('down', (event) => {
      // console.log('w');

      console.log('gameSet: ', this.gameSet);
      console.log('Model: ', this.model);
    });

    keyObj.on('up', (event) => { /* ... */ });

    // col
    this.lay2.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player1, this.lay2);
    this.lay3 = this.map.createLayer('topLayer', ['sprites'], 0, 0);
    this.player1.weaponAttack(this);

    // this.dialog.initDialog()
    this.add.existing(this.dialog);
  }

  update() {
    this.player1.movePlayer(this.cursors);

    if (this.gameSet.locatorScene) {
      this.stopScene(this, this.player1.x, this.player1.y);
      this.scene.start('SceneLocator', this.model);
    }

    // this.text.setText([
    //   `Player X: ${this.player1.x}`,
    //   `Player Y: ${this.player1.y}`,
    //   `ScrollX: ${this.camera.scrollX}`,
    //   `ScrollY: ${this.camera.scrollY}`,
    //   `MidX: ${this.camera.midPoint.x}`,
    //   `MidY: ${this.camera.midPoint.y}`,
    //   `Map: ${this.mainMap}`,
    //   `Gmset: ${this.gameSet.locatorScene}`,
    // ]);
  }

  stopScene(scene, x, y) {
    this.model.world.mainCharacter.setPosition(scene.scene.key, [x, y]);
    scene.scene.stop(scene.scene.key);
  }
}
