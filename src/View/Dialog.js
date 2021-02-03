class Dialog extends Phaser.GameObjects.Container {
  constructor(scene, x = 16, y = -16) {
    super(scene, x, y);

    this.scene = scene;

  }

  initDialog([x, y], speech) {
    this.visible = true;

    this.scene.model.isBlocked = true;

    const leftMargin = 75;
    const rightMargin = 100;
    const topMargin = 120

    if (x < leftMargin) x = leftMargin;
    if (y < topMargin) y = topMargin;
    if (x > this.scene.map.widthInPixels - rightMargin) x = this.scene.map.widthInPixels - rightMargin;

    const dialog = this.scene.add.image(-1 + x, -58 + y, 'dialog');
    this.add(dialog);

    const text = this.scene.add.text(-65 + x, -120 + y, '', {});

    text.text = speech.replace(/\\n/g, '\n');
    text.setStyle({ color: '#000000ff', fontFamily: 'Tahoma', fontSize: '10px' });
    this.add(text);
    text.visible = false;

    const rectangle2 = this.scene.add.rectangle(-80 + x, -120 + y, 150, 75);
    rectangle2.setOrigin(0, 0);
    rectangle2.isFilled = true;
    rectangle2.fillColor = 0;

    rectangle2.mask = new Phaser.Display.Masks.BitmapMask(this.scene, text);
    //

    let scrollCounter = 0;
    const scrollingPx = 12;

    const roundCloseButton = this.scene.add.image(72 + x, -40 + y, 'atlasPersonsObject', 'roundCloseButton');
    this.add(roundCloseButton);
    roundCloseButton.setInteractive();
    roundCloseButton.on('pointerdown', (pointer) => {
      this.scene.model.isBlocked = false;
      this.visible = false;
      rectangle2.visible = false;
      rectangle2.mask.destroy();
      scrollCounter = 0;
      this.scene.model.world.mainCharacter.setPosition(this.scene.scene.key, [this.scene.player1.x, this.scene.player1.y]);
      this.scene.model.isFinishGame();
      this.scene.model.world.toRender();
    });

    const downCloseButton = this.scene.add.image(72 + x, -58 + y, 'atlasPersonsObject', 'downButton');
    this.add(downCloseButton);
    downCloseButton.setInteractive();
    downCloseButton.on('pointerdown', (pointer) => {
      if (scrollCounter < 5) {
        text.y -= scrollingPx;
        scrollCounter += 1;
      }
    });

    const upCloseButton = this.scene.add.image(72 + x, -76 + y, 'atlasPersonsObject', 'upButton');
    this.add(upCloseButton);
    upCloseButton.setInteractive();
    upCloseButton.on('pointerdown', (pointer) => {
      if (scrollCounter > 0) {
        text.y += scrollingPx;
        scrollCounter -= 1;
      }
    });
  }
}
