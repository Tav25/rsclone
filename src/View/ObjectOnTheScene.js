// You can write more code here

/* START OF COMPILED CODE */

class ObjectOnTheScene extends Phaser.GameObjects.Image {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y, texture || 'atlasPersonsObject', frame !== undefined && frame !== null ? frame : 'AdeganCrystal_459');

    const thisPhysicsBody = new PhysicsBody(this);
    // thisPhysicsBody.bodyWidth = 45;
    // thisPhysicsBody.bodyHeight = 45;

    scene.physics.add.existing(this, true);

    scene.add.existing(this);
    // scene.physics.add.overlap(scene.player1, this, () => { console.log('BOX')});
    scene.physics.add.overlap(scene.player1, this, this.collisionFunction);
    scene.physics.add.collider(scene.player1, this);//
  }

  collisionFunction() {
    console.log('BOX2');
    // this.replaceObjectImage()
  }

  replaceObjectImage() {
    console.log('BOX3');
    const image = 'medkitsRebelFirstAidKit_505';
    this.setTexture('atlasPersonsObject', image);
  }
}
