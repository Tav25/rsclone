// You can write more code here

/* START OF COMPILED CODE */

class leftMenu extends Phaser.GameObjects.Container {
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

    const imageInLeftMenu = this.scene.add.image(18, imagePositionY, 'atlasPersonsObject', subjectImage, functionPointerDown);
    this.add(imageInLeftMenu);
    imageInLeftMenu.setInteractive();

    // console.log('Cl1');
    // console.log(imageInLeftMenu);

    imageInLeftMenu.on('pointerdown', (pointer) => {
      functionPointerDown();
    });

    const textInLeftMenu = this.scene.add.text(42, textPositionY, '', {});
    textInLeftMenu.text = subjectName;
    textInLeftMenu.setStyle({ color: '#020202ff', fontFamily: 'Tahoma' });
    this.add(textInLeftMenu);
  }

  objectPositionInTheList2() {
    this.scene.gameSet.listOfEquipment.forEach((e) => {
      // console.log('E:', e);
      const imagePositionY = 18 + 32 * e.position;
      const textPositionY = 7 + 32 * e.position;

      const imageInLeftMenu = this.scene.add.image(18, imagePositionY, 'atlasPersonsObject', e.image);
      this.add(imageInLeftMenu);
      imageInLeftMenu.setInteractive();

      imageInLeftMenu.on('pointerdown', (pointer) => {
        new Function(e.functionPointerDown)(9);
      });

      const textInLeftMenu = this.scene.add.text(42, textPositionY, '', {});
      textInLeftMenu.text = e.text;
      textInLeftMenu.setStyle({ color: '#020202ff', fontFamily: 'Tahoma' });
      this.add(textInLeftMenu);
    });
  }
}
