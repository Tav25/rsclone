class SceneInterface extends Phaser.Scene {
  constructor() {
    super('SceneInterface');
  }

  init(model)
    {
        this.model = model;
        console.log(this.model)
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

    const herosLifePoints = this.gameSet.hero.lifePoints;
    if (herosLifePoints < 32) { this.vbn(herosLifePoints, 0x69FF57, 0xF8FF18, this); }
    if (herosLifePoints > 32) { this.vbn(herosLifePoints - 32, 0xF8FF18, 0xFF1F18, this); }
    if (herosLifePoints > 64) { this.vbn(herosLifePoints - 64, 0x69FF57, 0xF8FF18, this); }

    const mainFrame = this.add.image(0, 0, 'mainFrame');
    this.add.existing(mainFrame);
    mainFrame.setOrigin(0, 0);

    const img3 = new leftMenu(this, 306, 50);
    this.add.existing(img3);

    img3.objectPositionInTheList = ['Locator', 'Locator_421', 0, () => {
      console.log('Locator');
      if (this.gameSet.locatorScene) { this.gameSet.locatorScene = false; } else { this.gameSet.locatorScene = true; }
      console.log(this.gameSet);
    }];

    img3.objectPositionInTheList2();
    // img3.objectPositionInTheList2 = ['Phaser S', 'weaponsLightsaber_510', 1];

    // this.openTopMenuFile = new openTopMenu(this, 106, 28);
    // // this.openTopMenuFile
    // this.add.existing(this.openTopMenuFile);

    this.textFile = new topMenuText(this, 8, 28, 'File', () => {
      console.log(this.openTopMenuFile);
      this.openTopMenuFile.x = 16;
      this.openTopMenuFile.setDepth(10);
    });
    this.add.existing(this.textFile);

    // this.textOption = new topMenuText(this, 42, 28, 'Option');
    // this.add.existing(this.textOption);

    // this.textWindow = new topMenuText(this, 96, 28, 'Window');
    // this.add.existing(this.textWindow);

    // this.textHelp = new topMenuText(this, 156, 28, 'Help');
    // this.add.existing(this.textHelp);

    const keyObj = this.input.keyboard.addKey('Q'); // Get key object
    keyObj.on('down', (event) => {
      console.log('Q');
      console.log(this.sc);
    });
  }

  update() {
    this.arrows.directionOfMovement = this.gameSet.mapArrows;
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
