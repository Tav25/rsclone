class SceneStart extends Phaser.Scene {
  constructor() {
    super('SceneStart');

    /** @type {Phaser.Tilemaps.TilemapLayer} */
    this.lay1;
    /** @type {Player} */
    this.player1;

    this.mainMap = 'winMap';
  }

  init(model) {
    this.model = model;
  }

  create() {
    const bass = this.sound.add('opening'); bass.play();

    this.gameSet = this.cache.json.get('gameSettings');
    this.gameSet.mapArrows = [1, 1, 1, 1];

    this.map = this.add.tilemap(this.mainMap);
    this.map.addTilesetImage('sprites', 'sprites');

    this.lay1 = this.map.createLayer('bottomLayer', ['sprites'], 0, 0);
    this.lay2 = this.map.createLayer('middleLayer', ['sprites'], 0, 0);
    this.lay2 = this.map.createLayer('start', ['sprites'], 0, 0);

    this.player1 = new Player(this);
    this.add.existing(this.player1);

    // camera
    const camera = new GameCamera(this);
    this.cameras.main.fadeFrom(2000, Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255));

    this.fly = this.add.container(-20, 200);

    // weaponsLightsaber_510
    const fly1 = this.add.image(0, 0, 'atlasPersonsObject', '948');
    const fly2 = this.add.image(32, 0, 'atlasPersonsObject', '949');
    const fly3 = this.add.image(0, 32, 'atlasPersonsObject', '950');
    const fly4 = this.add.image(32, 32, 'atlasPersonsObject', '951');
    this.fly.add([fly1, fly2, fly3, fly4]);

    const timedEvent = this.time.delayedCall(3000, this.onEvent, [], this);
  }

  update() {
    this.fly.x += 2;
  }

  onEvent() {
    this.scene.stop('SceneStart');
    this.scene.start('world1scene1', this.model);
  }
}
