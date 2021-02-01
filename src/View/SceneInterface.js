class SceneInterface extends Phaser.Scene {
  constructor() {
    super('SceneInterface');
  }

  init(model) {
    this.model = model;
    console.log(this.model);
  }

  create() {
    this.gameSet = this.cache.json.get('gameSettings');
    console.log(this.gameSet);

    this.sc = this.scene.launch('world1scene1', this.model);

    const rectangle = this.add.rectangle(306, 50, 210, 295);
    rectangle.setOrigin(0, 0);
    rectangle.isFilled = true;

    this.arrows = new Arrows(this);
    this.add.existing(this.arrows);

    // const herosLifePoints = this.gameSet.hero.lifePoints;
    // if (herosLifePoints < 32) { this.vbn(herosLifePoints, 0x69FF57, 0xF8FF18, this); }
    // if (herosLifePoints > 32) { this.vbn(herosLifePoints - 32, 0xF8FF18, 0xFF1F18, this); }
    // if (herosLifePoints > 64) { this.vbn(herosLifePoints - 64, 0x69FF57, 0xF8FF18, this); }

    const mainFrame = this.add.image(0, 0, 'mainFrame');
    this.add.existing(mainFrame);
    mainFrame.setOrigin(0, 0);

    const img4 = new EquippedWeapon(this, 306, 50);
    this.add.existing(img4);
    img4.initEquippedWeapon();

    this.newWorld = new topMenuText(this, 8, 28, 'New World', () => { console.log('New World'); });
    this.loadWorld = new topMenuText(this, 70, 28, 'Load World', () => { console.log('Load World'); });
    this.saveWorld = new topMenuText(this, 140, 28, 'Save World', () => { console.log('Save World'); });
    this.сhangeUser = new topMenuText(this, 210, 28, 'Change User', () => { console.log('Change User'); });
    this.statistics = new topMenuText(this, 280, 28, 'Statistics', () => { console.log('Statistics'); });
    this.About = new topMenuText(this, 330, 28, 'About', () => { console.log('About'); });

    const keyObj = this.input.keyboard.addKey('Q'); // Get key object
    keyObj.on('down', (event) => {
      console.log('Q');
    });
  }

  update() {
    this.arrows.directionOfMovement = this.gameSet.mapArrows;

    if (this.model.world.mainCharacter.inventory.isChanged) {
      
      console.log('Update');
      this.img3 = new Inventory(this, 306, 50);
      this.add.existing(this.img3);
      this.img3.objectPositionInTheList3();

      // const herosLifePoints = this.gameSet.hero.lifePoints;
      const herosLifePoints = this.model.world.mainCharacter.health.maxHealth - this.model.world.mainCharacter.health.currentHealth;
      if (herosLifePoints < 32) { this.vbn(herosLifePoints, 0x69FF57, 0xF8FF18, this); }
      if (herosLifePoints > 32) { this.vbn(herosLifePoints - 32, 0xF8FF18, 0xFF1F18, this); }
      if (herosLifePoints > 64) { this.vbn(herosLifePoints - 64, 0x69FF57, 0xF8FF18, this); }
      
      this.model.world.mainCharacter.inventory.isRendered();

    }
    // console.log(this.openTopMenuFile)
  }

  test() {
    console.log(this.openTopMenuFile);
    // this.openTopMenuFile.x = 16;
  }

  vbn(didg, color0, color1, dfg) {
    const ellipse = dfg.add.ellipse(474, 311, 40, 40);
    ellipse.isFilled = true;
    ellipse.fillColor = color1;
    ellipse.smoothness = 32;

    const graphics = dfg.add.graphics();
    graphics.fillStyle(color0, 1);
    const c = -90;
    const a = c + didg * 11.25;
    graphics.slice(474, 311, 20, Phaser.Math.DegToRad(270), Phaser.Math.DegToRad(a), true);
    graphics.closePath();
    graphics.fillPath();
  }
}
