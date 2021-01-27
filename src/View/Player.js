// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y);

    this.setTexture('atlas', 'img1029');

    // this (components)
    const thisComponentAnim = new ComponentAnim(this);
    thisComponentAnim.animationKey = 'goToBottom';
    new Physics(this);

    const thisPhysicsBody = new PhysicsBody(this);
    thisPhysicsBody.bodyX = 4;
    thisPhysicsBody.bodyY = 4;
    thisPhysicsBody.bodyWidth = 26;
    thisPhysicsBody.bodyHeight = 26;

    this.gameSet = scene.cache.json.get('gameSettings');
    this.gameSet.hero.lifePoints = 10;
    console.log(scene);
    console.log(this);
  }

  /* START-USER-CODE */

  movePlayer(cursors) {
    const speed = 100;
    const prevVelocity = this.body.velocity.clone();

    this.body.setVelocity(0);

    if (cursors.left.isDown) {
      this.body.setVelocityX(-speed);
    } else if (cursors.right.isDown) {
      this.body.setVelocityX(speed);
    }

    if (cursors.up.isDown) {
      this.body.setVelocityY(-speed);
    } else if (cursors.down.isDown) {
      this.body.setVelocityY(speed);
    }

    this.body.velocity.normalize().scale(speed);

    if (cursors.left.isDown) {
      this.play('goToLeft', true);
    } else if (cursors.right.isDown) {
      this.play('goToRight', true);
    } else if (cursors.up.isDown) {
      this.play('goToTop', true);
    } else if (cursors.down.isDown) {
      this.play('goToBottom', true);
    } else {
      this.stop();

      if (prevVelocity.x < 0) this.setTexture('atlas', 'img1028');
      else if (prevVelocity.x > 0) this.setTexture('atlas', 'img1029');
      else if (prevVelocity.y < 0) this.setTexture('atlas', 'img1032');
      else if (prevVelocity.y > 0) this.setTexture('atlas', 'img1781');
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
