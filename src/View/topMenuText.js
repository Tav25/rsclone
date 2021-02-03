class topMenuText extends Phaser.GameObjects.Text {
  constructor(scene, x, y, text, callbackFun) {
    super(scene, x, y, '', {});

    this.scene = scene;

    this.text = text;
    this.callbackFun = callbackFun;
    this.setStyle({ color: '#000000ff', fontFamily: 'Tahoma', fontSize: '12px' });

    this.setInteractive();
    this.clickOnText();
    this.overOnText();
    this.outText();
    this.scene.add.existing(this);
  }

  clickOnText() {
    this.on('pointerdown', function (pointer) {
      this.callbackFun();
    });
  }

  overOnText() {
    this.on('pointerover', function (pointer) {
      this.setBackgroundColor('#C0EEFF');
    });
  }

  outText() {
    this.on('pointerout', function (pointer) {
      this.setBackgroundColor('#FFFFFF');
    });
  }
}
