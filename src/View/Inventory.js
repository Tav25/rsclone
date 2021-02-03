class Inventory extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.scene = scene;
    const pictureInventoryBack = this.scene.add.image(0, 0, 'img3');
    pictureInventoryBack.setOrigin(0, 0);
    this.add(pictureInventoryBack);
    this.pictureInventoryBack = pictureInventoryBack;
  }

    objectPositionInTheList() {
    this.scene.model.world.mainCharacter.inventory.itemList.forEach((e, index) => {
      // console.log('E:', e.index, e);
      const imagePositionY = 18 + 32 * index;
      const textPositionY = 7 + 32 * index;
      const imageInInventory = this.scene.add.image(18, imagePositionY, 'atlasPersonsObject', e.icon);
      this.add(imageInInventory);
      imageInInventory.setInteractive();

      imageInInventory.on('pointerdown', (pointer) => {
        this.scene.model.world.mainCharacter.equipment.equipWeapon(e);

        if (e.itemObject.type === 'locator') {
          if (!this.scene.gameSet.locatorScene) { this.scene.gameSet.locatorScene = true; } else { this.scene.gameSet.locatorScene = false; }
        }

        if (e.itemObject.type === 'medkit') {
          this.scene.model.world.mainCharacter.health.restoreHealth(e);
          this.scene.model.world.mainCharacter.inventory.removeItem(e.name);
        }
      });

      const textInInventory = this.scene.add.text(42, textPositionY, '', {});
      textInInventory.text = e.name;
      textInInventory.setStyle({ color: '#020202ff', fontFamily: 'Tahoma' });
      this.add(textInInventory);
    });
  }
}
