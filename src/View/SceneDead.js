// import TopMenu from '../Menu';

/* START OF COMPILED CODE */

class SceneDead extends Phaser.Scene {
  constructor() {
    super('SceneDead');

    /** @type {Phaser.Tilemaps.TilemapLayer} */
    this.lay1;
    /** @type {Player} */
    this.player1;

    /* START-USER-CTR-CODE */
    this.mainMap = 'winMap';
    // this.sceneName = this.scene.key
  }

  init(model) {
    this.model = model;
    // console.log('sc1:', this.model);
  }

  create() {
    this.gameSet = this.cache.json.get('gameSettings');
    this.gameSet.mapArrows = [1, 1, 1, 1];

    this.map = this.add.tilemap(this.mainMap);
    this.map.addTilesetImage('sprites', 'sprites');

    this.lay1 = this.map.createLayer('bottomLayer', ['sprites'], 0, 0);
    this.lay2 = this.map.createLayer('middleLayer', ['sprites'], 0, 0);

    this.player1 = new Player(this);
    this.add.existing(this.player1);

    // camera
    const camera = new GameCamera(this);
    this.cameras.main.fadeFrom(2000, Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255), Phaser.Math.Between(50, 255));

    this.lay3 = this.map.createLayer('dead', ['sprites'], 0, 0);

    this.fly = this.add.container(-20, 200);

    // weaponsLightsaber_510
    const fly1 = this.add.image(0, 0, 'atlasPersonsObject', '948');
    const fly2 = this.add.image(32, 0, 'atlasPersonsObject', '949');
    const fly3 = this.add.image(0, 32, 'atlasPersonsObject', '950');
    const fly4 = this.add.image(32, 32, 'atlasPersonsObject', '951');
    this.fly.add([fly1, fly2, fly3, fly4]);

    // this.dialog.initDialog()
  }

  update() {
    this.fly.x += 2;
    this.fly.y -= 0.5;
    this.fly.rotation -= 0.01;
    this.fly.scale -= 0.005;

    if (this.gameSet.newScene) {
      this.scene.start('world1scene1', this.model);
      this.gameSet.newScene = false;
      //! добавить функцию что игра не закончена
    }
  }
}
