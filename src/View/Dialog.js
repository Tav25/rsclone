// You can write more code here

/* START OF COMPILED CODE */

class Dialog extends Phaser.GameObjects.Container {
  constructor(scene, x = 0, y = 0) {
    super(scene, x, y);

    this.scene = scene;

    // this.scene.add.existing(this);
  }

  initDialog([x, y], speech) {
    // x = 250;
    // y = 350;

    console.log('initdiadog');

    const dialog = this.scene.add.image(-1 + x, -58 + y, 'dialog');
    this.add(dialog);

    const text = this.scene.add.text(-81 + x, -103 + y, '', {});

    text.text = speech.replace(/\\n/g, '\n');
    // text.text = "Welcome back, Luke! Can you \\nhelp me find the gem from my \\nnecklace? He disappeared \\nmysteriously. I'm sure the \\nodd fellow in the SOUTH \\nis involved.";
    text.setStyle({ color: '#000000ff', fontFamily: 'Tahoma', fontSize: '10px' });
    this.add(text);

    const image = this.scene.add.image(72 + x, -40 + y, 'atlasPersonsObject', 'roundCloseButton');
    this.add(image);
    image.setInteractive();
    image.on('pointerdown', (pointer) => {
      console.log('roundCloseButton');
      this.visible = false;
		  });
  }
}
