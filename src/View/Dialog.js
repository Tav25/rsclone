// You can write more code here

/* START OF COMPILED CODE */

class Dialog extends Phaser.GameObjects.Container {
  constructor(scene, x = 16, y = -16) {
    super(scene, x, y);

    this.scene = scene;

    // this.scene.add.existing(this);
  }

  initDialog([x, y], speech) {
    // x = 250;
    // y = 350;
    this.visible = true;

    this.scene.model.isBlocked = true;

    if (x < 75) x = 75;
    if (y < 120) y = 120;
    if (x > this.scene.map.widthInPixels - 100) x = this.scene.map.widthInPixels - 100;

    const dialog = this.scene.add.image(-1 + x, -58 + y, 'dialog');
    this.add(dialog);

    const text = this.scene.add.text(-65 + x, -120 + y, '', {});

    text.text = speech.replace(/\\n/g, '\n');
    // text.text = "Welcome back, Luke! Can you \\nhelp me find the gem from my \\nnecklace? He disappeared \\nmysteriously. I'm sure the \\nodd fellow in the SOUTH \\nis involved.";
    text.setStyle({ color: '#000000ff', fontFamily: 'Tahoma', fontSize: '10px' });
    this.add(text);
    text.visible = false;

    //

    // const rectangle3 = this.scene.add.rectangle(202, 38, 128, 128);
    // rectangle3.setOrigin(0.5, 0.5);
    // rectangle3.isFilled = true;
    // rectangle3.fillColor = 559826;

    const rectangle2 = this.scene.add.rectangle(-80 + x, -120 + y, 150, 75);
    rectangle2.setOrigin(0, 0);
    rectangle2.isFilled = true;
    rectangle2.fillColor = 0;

    rectangle2.mask = new Phaser.Display.Masks.BitmapMask(this.scene, text);
    //

    let list = 0;
    const scrollingPx = 12;

    const roundCloseButton = this.scene.add.image(72 + x, -40 + y, 'atlasPersonsObject', 'roundCloseButton');
    this.add(roundCloseButton);
    roundCloseButton.setInteractive();
    roundCloseButton.on('pointerdown', (pointer) => {
      this.scene.model.isBlocked = false;
      console.log('roundCloseButton');
      this.visible = false;
      rectangle2.visible = false;
      rectangle2.mask.destroy();
      list = 0;
      this.scene.model.world.mainCharacter.setPosition(this.scene.scene.key, [this.scene.player1.x, this.scene.player1.y]);
      this.scene.model.isFinishGame();
      this.scene.model.world.toRender();
    });

    const downCloseButton = this.scene.add.image(72 + x, -58 + y, 'atlasPersonsObject', 'downButton');
    this.add(downCloseButton);
    downCloseButton.setInteractive();
    downCloseButton.on('pointerdown', (pointer) => {
      if (list < 5) {
        text.y -= scrollingPx;
        list += 1;
      }
    });

    const upCloseButton = this.scene.add.image(72 + x, -76 + y, 'atlasPersonsObject', 'upButton');
    this.add(upCloseButton);
    upCloseButton.setInteractive();
    upCloseButton.on('pointerdown', (pointer) => {
      if (list > 0) {
        text.y += scrollingPx;
        list -= 1;
      }
    });
  }
}
