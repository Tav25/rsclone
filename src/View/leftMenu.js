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

    // this.objectPositionInTheList('Lazer S', 'weaponsLightsaber_510', 2);
    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  set objectPositionInTheList([subjectName, subjectImage, listPosition]) {
    const imagePositionY = 18 + 32 * listPosition;
    const textPositionY = 7 + 32 * listPosition;

    // weaponsLightsaber_5101
    const imageInLeftMenu = this.scene.add.image(18, imagePositionY, 'weapons', subjectImage);
    this.add(imageInLeftMenu);
    imageInLeftMenu.setInteractive();

    console.log('Cl1');
    console.log(imageInLeftMenu);

    imageInLeftMenu.on('pointerdown', (pointer) => {
      console.log('Cl0');
      // this.callbackFun();
    });

    const textInLeftMenu = this.scene.add.text(42, textPositionY, '', {});
    textInLeftMenu.text = subjectName;
    textInLeftMenu.setStyle({ color: '#020202ff', fontFamily: 'Tahoma' });
    this.add(textInLeftMenu);
  }

  /* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
