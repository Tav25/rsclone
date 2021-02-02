// import TopMenu from '../Menu';

/* START OF COMPILED CODE */

class world1scene3 extends Phaser.Scene {
  constructor() {
    super('world1scene3');

    /** @type {Phaser.Tilemaps.TilemapLayer} */
    this.lay1;
    /** @type {Player} */
    this.player1;

    /* START-USER-CTR-CODE */
    this.mainMap = 'map3';
    // this.sceneName = this.scene.key
  }

  init(model) {
    this.model = model;
    // console.log('sc1:', this.model);
  }

  create() {
    this.gameSet = this.cache.json.get('gameSettings');
    this.gameSet.mapArrows = [0, 0, 0, 1];

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
    const rectangleTop = new RectanglePhysics(this, 0, -2, this.map.widthInPixels, 3, () => { this.gameSet.hero.y = 545; this.gameSet.hero.x = this.player1.x; });
    const rectangleRight = new RectanglePhysics(this, 576, 0, 3, 576, () => { this.gameSet.hero.x = 20; this.gameSet.hero.y = this.player1.y; });
    const rectangleBottom = new RectanglePhysics(this, 0, 575, this.map.widthInPixels, 3, () => { this.gameSet.hero.y = 20; this.gameSet.hero.x = this.player1.x; });
    const rectangleLeft = new RectanglePhysics(this, -2, 0, 3, this.map.heightInPixels, () => { this.model.world.mainCharacter.setPosition(this.scene.scene.key, [545, this.player1.y]); this.scene.stop('world1scene3'); this.scene.start('world1scene1'); });

    // text
    // this.text = this.add.text(10, 10).setScrollFactor(0).setFontSize(12).setColor('#273746');

    // key
    const keyObj = this.input.keyboard.addKey('W'); // Get key object
    keyObj.on('down', (event) => {
      // console.log('w');

      console.log('gameSet: ', this.gameSet);
      console.log('Model: ', this.model);
      console.log('Model: ', this.model.isBlocked);
    });

    keyObj.on('up', (event) => { /* ... */ });

    // col
    this.lay2.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player1, this.lay2);
    this.lay3 = this.map.createLayer('topLayer', ['sprites'], 0, 0);

    // this.dialog.initDialog()
    this.add.existing(this.dialog);
  }

  update() {
    if (this.model.isWin) {
      this.scene.start('SceneWin', this.model);
      this.model.winGame();
      console.log('Выиграл');
    }

    if (this.model.isLose) {
      this.scene.start('SceneDead', this.model);
      this.model.loseGame();
      console.log('Проиграл');
    }

    this.player1.movePlayer(this.cursors);

    if (this.gameSet.locatorScene) {
      this.stopScene(this, this.player1.x, this.player1.y);
      this.scene.start('SceneLocator', this.model);
    }

    //! 777
    if (this.model.world.isChanged) {
      this.scene.restart();
      this.model.world.isRendered();
      console.log('restart();');
    }
    //!
  }

  stopScene(scene, x, y) {
    this.model.world.mainCharacter.setPosition(scene.scene.key, [x, y]);
    scene.scene.stop(scene.scene.key);
  }
}
