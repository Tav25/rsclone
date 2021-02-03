class world1scene1 extends Phaser.Scene {
  constructor() {
    super('world1scene1');

    /** @type {Phaser.Tilemaps.TilemapLayer} */
    this.lay1;
    /** @type {Player} */
    this.player1;

    this.mainMap = 'map1';
  }

  init(model) {
    this.model = model;
  }

  create() {
    this.gameSet = this.cache.json.get('gameSettings');
    this.gameSet.mapArrows = [1, 1, 1, 1];

    this.map = this.add.tilemap(this.mainMap);
    this.map.addTilesetImage('sprites', 'sprites');

    this.lay1 = this.map.createLayer('bottomLayer', ['sprites'], 0, 0);
    this.lay1_5 = this.map.createLayer('bottomLayer2', ['sprites'], 0, 0);
    this.lay2 = this.map.createLayer('middleLayer', ['sprites'], 0, 0);

    this.player1 = new Player(this);
    this.add.existing(this.player1);

    this.model.world.mainCharacter.setPosition(this.key, [this.player1.x, this.player1.y], 'toTop');
    // camera
    const camera = new GameCamera(this);

    // cursor
    this.cursors = this.input.keyboard.createCursorKeys();

    // dialog
    this.dialog = new Dialog(this);
    // objects
    // const items = new Item(this);
    // items.ItemsOnScene();

    const b3 = new ObjectOnTheScene(this);
    b3.ItemsOnScene();

    new RectanglePhysics(this, 414, 207, 26, 18, () => { this.stopScene(this, 143, 270); this.scene.start('world1scene6', this.model); });
    new RectanglePhysics(this, 260, 416, 26, 18, () => { this.player1.x = 270; this.player1.y = 530; });
    new RectanglePhysics(this, 260, 495, 26, 18, () => { this.player1.x = 270; this.player1.y = 400; });

    const rectangleTop = new RectanglePhysics(this, 0, -2, this.map.widthInPixels, 3, () => { this.stopScene(this, this.player1.x, 545); this.scene.start('world1scene2', this.model); });
    const rectangleRight = new RectanglePhysics(this, 576, 0, 3, 576, () => { this.stopScene(this, 20, this.player1.y); this.scene.start('world1scene3', this.model); });
    const rectangleBottom = new RectanglePhysics(this, 0, 575, this.map.widthInPixels, 3, () => { this.stopScene(this, this.player1.x, 20); this.scene.start('world1scene4', this.model); });
    const rectangleLeft = new RectanglePhysics(this, -2, 0, 3, this.map.heightInPixels, () => { this.stopScene(this, 545, this.player1.y); this.scene.start('world1scene5', this.model); });


    // col
    this.lay2.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player1, this.lay2);
    this.lay3 = this.map.createLayer('topLayer', ['sprites'], 0, 0);

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

    if (this.gameSet.newScene) {
      this.scene.start('world1scene1', this.model);
      this.gameSet.newScene = false;
    }

    if (this.model.world.isChanged) {
      this.scene.restart();
      this.model.world.isRendered();
      console.log('restart();');
    }

    //! 777 только на 1й сцене финал?
    if (false) {
      this.scene.start('SceneWin', this.model);
    }
  }

  stopScene(scene, x, y) {
    this.model.world.mainCharacter.setPosition(scene.scene.key, [x, y]);
    scene.scene.stop(scene.scene.key);
  }
}
