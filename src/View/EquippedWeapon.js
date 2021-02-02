// You can write more code here

/* START OF COMPILED CODE */

class EquippedWeapon extends Phaser.GameObjects.Container {
  constructor(scene, x = 0, y = 0) {
    super(scene, x, y);

    this.scene = scene;

    // this.scene.add.existing(this);
  }

  initEquippedWeapon0([x, y], speech) {
    this.visible = true;
    this.scene.model.isBlocked = true;
    console.log('initdiadog');
    const dialog = this.scene.add.image(-1 + x, -58 + y, 'dialog');
    this.add(dialog);
    const text = this.scene.add.text(-81 + x, -103 + y, '', {});
    text.text = speech.replace(/\\n/g, '\n');
    text.setStyle({ color: '#000000ff', fontFamily: 'Tahoma', fontSize: '10px' });
    this.add(text);
    const image = this.scene.add.image(72 + x, -40 + y, 'atlasPersonsObject', 'roundCloseButton');
    this.add(image);
    image.setInteractive();
    image.on('pointerdown', (pointer) => {
      this.scene.model.isBlocked = false;
      console.log('roundCloseButton');
      this.visible = false;
      this.scene.model.world.mainCharacter.setPosition(this.scene.scene.key, [this.scene.player1.x, this.scene.player1.y]);
    });
  }

  initEquippedWeapon() {
    if (this.scene.model.world.mainCharacter.equipment.equippedWeapon) {
      console.log('Weap', this.scene.model.world.mainCharacter.equipment.equippedWeapon);
      console.log('initEquippedWeapon()', this.scene.model.world.mainCharacter);
      const image = this.scene.add.image(110, 262, 'atlasPersonsObject', this.scene.model.world.mainCharacter.equipment.equippedWeapon.icon);
      this.add(image);

      const rectangle = this.scene.add.rectangle(83, 278, 10, 32);//! заряд
      rectangle.setOrigin(0.5, 1);
      rectangle.isFilled = true;
      rectangle.fillColor = 559826;
      this.add(rectangle);
    }
  }
}
