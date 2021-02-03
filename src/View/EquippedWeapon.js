class EquippedWeapon extends Phaser.GameObjects.Container {
  constructor(scene, x = 0, y = 0) {
    super(scene, x, y);

    this.scene = scene;

  }

  initEquippedWeapon() {
    if (this.scene.model.world.mainCharacter.equipment.equippedWeapon) {
      //console.log('Weap', this.scene.model.world.mainCharacter.equipment.equippedWeapon);
      //console.log('initEquippedWeapon()', this.scene.model.world.mainCharacter);
      const image = this.scene.add.image(110, 262, 'atlasPersonsObject', this.scene.model.world.mainCharacter.equipment.equippedWeapon.icon);
      this.add(image);

      const rectangle = this.scene.add.rectangle(83, 278, 10, 32);
      rectangle.setOrigin(0.5, 1);
      rectangle.isFilled = true;
      rectangle.fillColor = 559826;
      this.add(rectangle);
    }
  }
}
