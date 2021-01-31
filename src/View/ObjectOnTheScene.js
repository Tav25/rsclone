// You can write more code here

/* START OF COMPILED CODE */

// class ObjectOnTheScene extends Phaser.GameObjects.Image {
//   constructor(scene, x, y, texture, frame, funct) {
//     super(scene, x, y, texture || 'atlasPersonsObject', frame !== undefined && frame !== null ? frame : 'AdeganCrystal_459');

//     const thisPhysicsBody = new PhysicsBody(this);

//     scene.physics.add.existing(this, true);

//     scene.add.existing(this);
//     scene.physics.add.overlap(scene.player1, this, funct);
//     scene.physics.add.collider(scene.player1, this);//

//     this.on('pointerdown', (pointer) => {
//       console.log('Cl0');
//     });
//   }

// }

class ObjectOnTheScene extends Phaser.GameObjects.Container {
  constructor(scene, x = 0, y = 0) {
    super(scene, x, y);

    this.scene = scene;
    // console.log('++++++++++++++', scene.gameSet);
  }

  ItemsOnScene2() {
    this.scene.gameSet.objectOnMap.forEach((e) => {
      // if(this.scene..key)
      if (this.scene.sys.config === e.location) {
        const itemObj = this.scene.add.image(e.x, e.y, 'atlasPersonsObject', e.image);

        const thisPhysicsBody = new PhysicsBody(itemObj);

        this.scene.physics.add.existing(itemObj, true);

        this.scene.add.existing(itemObj);
        this.scene.physics.add.overlap(this.scene.player1, itemObj, () => {
          new Function(e.functionCollision)();
        });
        this.scene.physics.add.collider(this.scene.player1, itemObj);//
      }
    });
  }

  ItemsOnScene() {
    // console.log(this.scene.model.world.locations[0].objects);

    this.scene.model.world.locations.forEach((e) => {
      if (e.locationObject.name === this.scene.sys.config) {
        e.objects.forEach((e) => {
          console.log(e);

          const itemObj = this.scene.add.image(e.position.coordinates[0], e.position.coordinates[1], 'atlasPersonsObject', e.icon.toBottom);
          itemObj.setOrigin(0, 1);

          const thisPhysicsBody = new PhysicsBody(itemObj);
          // this.setOrigin(0.5, 1);

          this.scene.physics.add.existing(itemObj, true);

          this.scene.add.existing(itemObj);
          this.scene.physics.add.overlap(this.scene.player1, itemObj, () => {
            console.log('JJJ');

            const itemToTake = e.activate(this.scene.model.world.mainCharacter
              .isThisItemYouNeed(e.itemToActivate));

            const speech = e.getDialog();
            this.scene.dialog.initDialog(e.position.coordinates, speech);
            console.log(speech);

            if (itemToTake) {
              this.scene.model.world.mainCharacter.giveItem(e.itemToActivate);
              if (itemToTake) this.scene.model.world.mainCharacter.pickItem(itemToTake.activate());
            }
          });
          this.scene.physics.add.collider(this.scene.player1, itemObj);//
        });
      }
    });
  }
}
