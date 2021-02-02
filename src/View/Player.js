// You can write more code here

/* START OF COMPILED CODE */

class Player extends Phaser.GameObjects.Sprite {
  constructor(scene, x, y, texture, frame) {
    super(scene, x, y);

    this.scene = scene;

    this.x = this.scene.model.world.mainCharacter.position.coordinates[0];
    this.y = this.scene.model.world.mainCharacter.position.coordinates[1];

    new Physics(this);

    const thisPhysicsBody = new PhysicsBody(this);
    thisPhysicsBody.bodyX = 4;
    thisPhysicsBody.bodyY = 4;
    thisPhysicsBody.bodyWidth = 26;
    thisPhysicsBody.bodyHeight = 26;

    this.setTexture('atlas', this.scene.model.world.mainCharacter.icon);

    console.log(this.scene.model.world.mainCharacter);

    this.weaponOfAttack = this.scene.add.sprite(this.x, this.y);
    new Physics(this.weaponOfAttack);
  }

  movePlayer(cursors) {
    if (this.scene.model.isBlocked) {
      this.stop();
    } else {
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
        console.log('down');
      } else if (cursors.right.isDown) {
        this.play('goToRight', true);
      } else if (cursors.up.isDown) {
        this.play('goToTop', true);
      } else if (cursors.down.isDown) {
        this.play('goToBottom', true);
      } else if (cursors.space.isDown) {
        this.attackDirection = {
          toLeft: {
            animation: 'attackLeft',
            animationLightSaber: 'laserSwordLeft',
            xPosition: -34,
            yPosition: 0,
          },
          toright: {
            animation: 'attackRight',
            animationLightSaber: 'laserSwordRight',
            xPosition: 34,
            yPosition: 0,
          },
          totop: {
            animation: 'attackTop',
            animationLightSaber: 'laserSwordTop',
            xPosition: 0,
            yPosition: -34,
          },
          tobottom: {
            animation: 'attackBottom',
            animationLightSaber: 'laserSwordBottom',
            xPosition: 0,
            yPosition: 34,
          },
        };

        this.weaponOfAttack.visible = true;
        // console.log(this.attackDirection[this.scene.model.world.mainCharacter.position.direction].animationLightSaber)

        if (this.scene.model.world.mainCharacter.position.direction) {
          this.play(this.attackDirection[this.scene.model.world.mainCharacter.position.direction].animation, true);
          this.weaponOfAttack.play(this.attackDirection[this.scene.model.world.mainCharacter.position.direction].animationLightSaber, true);
          this.weaponOfAttack.x = this.x + this.attackDirection[this.scene.model.world.mainCharacter.position.direction].xPosition;
          this.weaponOfAttack.y = this.y + this.attackDirection[this.scene.model.world.mainCharacter.position.direction].yPosition;
        }
      } else {
        if (this.weaponOfAttack) {
          this.weaponOfAttack.x = 0;
          this.weaponOfAttack.y = 0;

          this.weaponOfAttack.visible = false;
        }

        this.stop();

        if (prevVelocity.x < 0) {
          this.setTexture('atlas', 'img1028');
          this.scene.model.world.mainCharacter.position.direction = 'toLeft';
          this.scene.model.world.mainCharacter.icon = 'img1028';
        } else if (prevVelocity.x > 0) {
          this.setTexture('atlas', 'img1029');
          this.scene.model.world.mainCharacter.position.direction = 'toright';
          this.scene.model.world.mainCharacter.icon = 'img1029';
        } else if (prevVelocity.y < 0) {
          this.setTexture('atlas', 'img1032');
          this.scene.model.world.mainCharacter.position.direction = 'totop';
          this.scene.model.world.mainCharacter.icon = 'img1032';
        } else if (prevVelocity.y > 0) {
          this.setTexture('atlas', 'img1781');
          this.scene.model.world.mainCharacter.position.direction = 'tobottom';
          this.scene.model.world.mainCharacter.icon = 'img1781';
        }
      }

      // if (cursors.space.isDown) {
      //   console.log("space")
      //   this.play('goToTop', true);
      // }
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
