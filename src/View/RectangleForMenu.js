// You can write more code here

/* START OF COMPILED CODE */
//		// rectangle2
// const rectangle2 = new RectangleForMenu(this, 54, 75, 20, 15);
// this.add.existing(rectangle2);
// rectangle2.fillColor = 10877047;

class RectangleForMenu extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height) {
    super(scene, x, y, typeof width === 'number' ? width : 128, typeof height === 'number' ? height : 128);

    this.setOrigin(0, 0);
    this.isFilled = true;
    this.fillColor = 13027014;

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  /* START-USER-CODE */

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
