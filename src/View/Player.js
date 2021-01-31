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
  }

  weaponAttack(sc) {
    const keyObj = sc.input.keyboard.addKey('Space'); // Get key object
    this.medkitsBactaFluid_480 = sc.add.sprite(sc.player1.x + 32, sc.player1.y, 'medkits', 'medkitsBactaFluid_480');
    this.medkitsBactaFluid_4801 = sc.add.sprite(sc.player1.x, sc.player1.y, 'medkits', 'medkitsBactaFluid_480');
    this.medkitsBactaFluid_480.visible = false;
    this.medkitsBactaFluid_4801.visible = false;

    keyObj.on('down', (event) => {
      console.log('atac', sc);
      this.medkitsBactaFluid_480.x = sc.player1.x + 32;
      this.medkitsBactaFluid_480.y = sc.player1.y + 0;
      this.medkitsBactaFluid_4801.x = sc.player1.x;
      this.medkitsBactaFluid_4801.y = sc.player1.y;
      this.medkitsBactaFluid_480.play('laserSwordRight', true);
      this.medkitsBactaFluid_4801.play('animation34', true);
      this.medkitsBactaFluid_480.visible = true;
      this.medkitsBactaFluid_4801.visible = true;
      sc.player1.visible = false;

      // this.medkitsBactaFluid_480.play('goToRight', true);
      //
      // const medkitsBactaFluid_480StartAnimation = new StartAnimation(medkitsBactaFluid_480);
      // 		medkitsBactaFluid_480StartAnimation.animationKey = "test";

      //
    });

    keyObj.on('up', (event) => {
      this.medkitsBactaFluid_480.stop();
      this.medkitsBactaFluid_4801.stop();
      this.medkitsBactaFluid_480.visible = false;
      this.medkitsBactaFluid_4801.visible = false;
      sc.player1.visible = true;

      // this.setTexture('atlas', this.scene.gameSet.hero.image);
    });
  }

  movePlayer(cursors) {
    if (this.scene.model.isBlocked) {
      this.stop()
    }else{
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
  }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
