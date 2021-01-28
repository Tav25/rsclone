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
    // this.sceneName = this.scene.key
  }

  create() {
    this.gameSet = this.cache.json.get('gameSettings');
    console.log(this.gameSet);
    this.gameSet.mapArrows = [1, 1, 1, 1];

    const map = this.add.tilemap(this.mainMap);
    map.addTilesetImage('sprites', 'sprites');

    this.player1 = new Player(this, this.gameSet.hero.x, this.gameSet.hero.y);
    if (!this.player1.onMap) { this.mainMap = 'map1'; }

    const lay1 = map.createLayer('bottomLayer', ['sprites'], 0, 0);
    const lay2 = map.createLayer('middleLayer', ['sprites'], 0, 0);

    this.add.existing(this.player1);

    const lay3 = map.createLayer('topLayer', ['sprites'], 0, 0);

    const objectOnTheSceneInterface = new ObjectOnTheScene(this, 221, 184);

    const object1Test = new RectanglePhysics(this, 414, 207, 26, 18, () => { this.stopScene(this, 143, 270); this.scene.start('world1scene6'); });
    const object2Test = new RectanglePhysics(this, 260, 416, 26, 18, () => { this.player1.x = 270; this.player1.y = 530; });
    const object3Test = new RectanglePhysics(this, 260, 495, 26, 18, () => { this.player1.x = 270; this.player1.y = 400; });

    const rectangleTop = new RectanglePhysics(this, 0, -2, map.widthInPixels, 3, () => { this.stopScene(this, this.player1.x, 545); this.scene.start('world1scene2'); });
    const rectangleRight = new RectanglePhysics(this, 576, 0, 3, 576, () => { this.stopScene(this, 20, this.player1.y); this.scene.start('world1scene3'); });
    const rectangleBottom = new RectanglePhysics(this, 0, 575, map.widthInPixels, 3, () => { this.stopScene(this, this.player1.x, 20); this.scene.start('world1scene4'); });
    const rectangleLeft = new RectanglePhysics(this, -2, 0, 3, map.heightInPixels, () => { this.stopScene(this, 545, this.player1.y); this.scene.start('world1scene5'); });

    this.lay1 = lay1;
    this.lay2 = lay2;

    const camera = this.cameras.main;
    camera.startFollow(this.player1);
    camera.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
    camera.setViewport(9, 52, 288, 288);
    this.camera = camera;

    this.map = map;

    this.cursors = this.input.keyboard.createCursorKeys();
    //
    

    this.text = this.add.text(10, 10).setScrollFactor(0).setFontSize(12).setColor('#273746');

    const keyObj = this.input.keyboard.addKey('W'); // Get key object
    keyObj.on('down', (event) => {
      console.log('w');
      console.log(this.scene.key);

    });

    keyObj.on('up', (event) => { /* ... */ });

    this.lay2.setCollisionByExclusion([-1]);
    this.physics.add.collider(this.player1, this.lay2);//
  }

  update() {
    this.player1.movePlayer(this.cursors);

    if (this.gameSet.locatorScene) {
      this.stopScene(this, this.player1.x, this.player1.y)
      // this.gameSet.hero.x = this.player1.x;
      // this.gameSet.hero.y = this.player1.y;
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

  stopScene(scene, x, y) {
    scene.gameSet.hero.x = x;
    scene.gameSet.hero.y = y;
    scene.gameSet.currentLocation = scene.scene.key;
    scene.scene.stop(scene.scene.key);
    console.log(scene.scene.key);
  }
}
