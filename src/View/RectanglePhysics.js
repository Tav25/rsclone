class RectanglePhysics extends Phaser.GameObjects.Rectangle {
  constructor(scene, x, y, width, height, collisionFunction) {
    super(scene, x, y, typeof width === 'number' ? width : 128, typeof height === 'number' ? height : 128);

    this.setOrigin(0, 0);
    this.isFilled = false;
    this.fillColor = 13027014;

    scene.physics.add.existing(this, true);

    scene.add.existing(this);
    // scene.physics.add.overlap(scene.player1, this, () => { console.log('BOX')});
    scene.physics.add.overlap(scene.player1, this, collisionFunction);
    scene.physics.add.collider(scene.player1, this);//
  }
}
