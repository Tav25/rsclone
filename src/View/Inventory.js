// You can write more code here

/* START OF COMPILED CODE */

class Inventory extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    // img3
    this.scene = scene;
    const img3 = this.scene.add.image(0, 0, 'img3');
    img3.setOrigin(0, 0);
    this.add(img3);
    this.img3 = img3;
  }

  set objectPositionInTheList([subjectName, subjectImage, listPosition, functionPointerDown]) {
    const imagePositionY = 18 + 32 * listPosition;
    const textPositionY = 7 + 32 * listPosition;

    const imageInInventory = this.scene.add.image(18, imagePositionY, 'atlasPersonsObject', subjectImage, functionPointerDown);
    this.add(imageInInventory);
    imageInInventory.setInteractive();

    // console.log('Cl1');
    // console.log(imageInInventory);

    imageInInventory.on('pointerdown', (pointer) => {
      functionPointerDown();
    });

    const textInInventory = this.scene.add.text(42, textPositionY, '', {});
    textInInventory.text = subjectName;
    textInInventory.setStyle({ color: '#020202ff', fontFamily: 'Tahoma' });
    this.add(textInInventory);
  }

  objectPositionInTheList2() {
    this.scene.gameSet.listOfEquipment.forEach((e) => {
      // console.log('E:', e);
      const imagePositionY = 18 + 32 * e.position;
      const textPositionY = 7 + 32 * e.position;

      const imageInInventory = this.scene.add.image(18, imagePositionY, 'atlasPersonsObject', e.image);
      this.add(imageInInventory);
      imageInInventory.setInteractive();

      imageInInventory.on('pointerdown', (pointer) => {
        new Function(e.functionPointerDown)(9);
      });

      const textInInventory = this.scene.add.text(42, textPositionY, '', {});
      textInInventory.text = e.text;
      textInInventory.setStyle({ color: '#020202ff', fontFamily: 'Tahoma' });
      this.add(textInInventory);
    });
  }

  objectPositionInTheList3() {
    let i = 0;
    this.scene.model.world.mainCharacter.inventory.itemList.forEach((e) => {
      console.log('E:', e.index, e);
      const imagePositionY = 18 + 32 * i;
      const textPositionY = 7 + 32 * i;
      i = +1;

      const imageInInventory = this.scene.add.image(18, imagePositionY, 'atlasPersonsObject', e.icon);
      this.add(imageInInventory);
      imageInInventory.setInteractive();

      imageInInventory.on('pointerdown', (pointer) => {
        this.scene.model.world.mainCharacter.equipment.equipWeapon(e);
        console.log(this.scene.model.world.mainCharacter);
      });

      const textInInventory = this.scene.add.text(42, textPositionY, '', {});
      textInInventory.text = e.name;
      textInInventory.setStyle({ color: '#020202ff', fontFamily: 'Tahoma' });
      this.add(textInInventory);
    });
  }
}