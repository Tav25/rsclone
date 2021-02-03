class SceneInterface extends Phaser.Scene {
  constructor() {
    super('SceneInterface');
  }

  init(data) {
    this.model = data.model;
    this.modalWindow = data.modalWindow;
    // console.log(this.modalWindow);
  }

  create() {
    this.gameSet = this.cache.json.get('gameSettings');
    // console.log(this.gameSet);

    this.sc = this.scene.launch('SceneStart', this.model);

    const rectangle = this.add.rectangle(306, 50, 210, 295);
    rectangle.setOrigin(0, 0);
    rectangle.fillColor = 15790320;
    rectangle.isFilled = true;

    this.arrows = new Arrows(this);
    this.add.existing(this.arrows);

    const mainFrame = this.add.image(0, 0, 'mainFrame');
    this.add.existing(mainFrame);
    mainFrame.setOrigin(0, 0);

    const img4 = new EquippedWeapon(this, 306, 50);
    this.add.existing(img4);
    img4.initEquippedWeapon();

    this.circle = new HealthСircle(this, 474, 311);
    this.add.existing(this.circle);

    this.newWorld = new topMenuText(this, 8, 28, 'New World', async () => {
      await this.model.newWorld();
      this.model.isWin = false;
      this.model.isLose = false;
      this.model.world.mainCharacter.position.coordinates[0] = 276;
      this.model.world.mainCharacter.position.coordinates[1] = 375;
      this.gameSet.newScene = true;
      console.log('New World');
    });
    this.loadWorld = new topMenuText(this, 74, 28, 'Load World', () => {
      this.modalWindow.loadGame.init();
      console.log('Load World');
    });
    this.saveWorld = new topMenuText(this, 142, 28, 'Save World', () => {
      this.modalWindow.saveGame.init();
      console.log('Save World');
    });
    this.сhangeUser = new topMenuText(this, 210, 28, 'Change User', () => {
      this.modalWindow.newUser.init();
      console.log('Change User');
    });
    this.statistics = new topMenuText(this, 285, 28, 'Statistics', () => {
      this.modalWindow.statistics.init();
      console.log('Statistics');
    });
    this.about = new topMenuText(this, 337, 28, 'About', () => {
      this.modalWindow.about.init();
      console.log('About');
    });
  }

  update() {
    this.arrows.directionOfMovement = this.gameSet.mapArrows;

    if (this.model.world.mainCharacter.inventory.isChanged) {
      this.circle.HealthСircleInit();
      // console.log('Update');
      this.img3 = new Inventory(this, 306, 50);
      this.add.existing(this.img3);
      this.img3.objectPositionInTheList();

      this.model.world.mainCharacter.inventory.isRendered();
    }
  }
}
