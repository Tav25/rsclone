class RectangleForMenu extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height) {
    super(scene, x, y, typeof width === 'number' ? width : 128, typeof height === 'number' ? height : 128);

    this.setOrigin(0, 0);
    this.isFilled = true;
    this.fillColor = 13027014;

  }

}

