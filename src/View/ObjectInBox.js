// You can write more code here

/* START OF COMPILED CODE */

class ObjectInBox extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, frame, funct) {
    super(scene, x, y, texture || 'atlasPersonsObject', frame !== undefined && frame !== null ? frame : 'AdeganCrystal_459');

    const thisPhysicsBody = new PhysicsBody(this);
    // thisPhysicsBody.bodyWidth = 45;
    // thisPhysicsBody.bodyHeight = 45;

    scene.physics.add.existing(this, true);

    scene.add.existing(this);
    scene.physics.add.overlap(scene.player1, this, funct);
    scene.physics.add.collider(scene.player1, this);//

    this.on('pointerdown', (pointer) => {
      console.log('Cl0');
    });
  }

  replaceObjectImage() {
    console.log('BOX3');
    const image = 'medkitsRebelFirstAidKit_505';
    this.setTexture('atlasPersonsObject', image);
  }
}
