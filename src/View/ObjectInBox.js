class ObjectInBox extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, frame, funct) {
    super(scene, x, y, texture || 'atlasPersonsObject', frame !== undefined && frame !== null ? frame : 'AdeganCrystal_459');

    const thisPhysicsBody = new PhysicsBody(this);


    scene.physics.add.existing(this, true);

    scene.add.existing(this);
    scene.physics.add.overlap(scene.player1, this, funct);
    scene.physics.add.collider(scene.player1, this);//

    this.on('pointerdown', (pointer) => {
    });
  }

  replaceObjectImage() {
    console.log('BOX3');
    const image = 'medkitsRebelFirstAidKit_505';
    this.setTexture('atlasPersonsObject', image);
  }
}
