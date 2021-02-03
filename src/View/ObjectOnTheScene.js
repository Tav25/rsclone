class ObjectOnTheScene extends Phaser.GameObjects.Container {
  constructor(scene, x = 0, y = 0) {
    super(scene, x, y);

    this.scene = scene;
  }

  ItemsOnScene() {
    const fpsEvent = 15;
    this.scene.model.world.locations.forEach((e) => {
      if (e.locationObject.name === this.scene.sys.config) {
        e.objects.forEach((e) => {
          const itemObj = this.scene.add.image(e.position.coordinates[0], e.position.coordinates[1], 'atlasPersonsObject', e.icon.toBottom);
          itemObj.setOrigin(0, 1);

          let isPhysicBodyHave = true;

          if (e.type === 'door' || e.type === 'enemy') {
            if (e.triggered) {
              isPhysicBodyHave = false;
            }
          }

          if (isPhysicBodyHave) {
            const thisPhysicsBody = new PhysicsBody(itemObj);
            this.scene.physics.add.existing(itemObj, true);
          }

          let counterForTheHero = 0;
          let counterForTheEnemy = 0;

          if (e.type === 'enemy') {
            const correctionX = 16;
            const correctionY = -16;
            const rectangle_1 = this.scene.add.rectangle(e.position.coordinates[0] + correctionX, e.position.coordinates[1] + correctionY, 128, 128);
            if (!e.isDead()) new Physics(rectangle_1);

            this.scene.physics.add.overlap(this.scene.player1, rectangle_1, () => {
              counterForTheEnemy++;
              if (counterForTheEnemy === fpsEvent) {
                this.scene.model.world.mainCharacter.hit(e);
                this.scene.model.world.mainCharacter.inventory.toRender();
                this.scene.model.isFinishGame();
                this.scene.model.world.isRendered();
                counterForTheEnemy = 0;
              }
            });

            this.scene.physics.add.overlap(this.scene.player1.weaponOfAttack, itemObj, () => {
              counterForTheHero++;
              if (counterForTheHero === fpsEvent) {
                e.hit(this.scene.model.world.mainCharacter);
                e.isDead();
                counterForTheHero = 0;
                if (e.isDead()) {
                  const itemFromEnemy = e.dead();
                  if (itemFromEnemy) this.scene.model.world.mainCharacter.pickItem(itemFromEnemy.activate());
                  this.scene.model.world.mainCharacter.setPosition(this.scene.scene.key, [this.scene.player1.x, this.scene.player1.y]);
                  this.scene.model.world.toRender();
                }
              }
            });
          }

          this.scene.physics.add.overlap(this.scene.player1, itemObj, () => {
            const itemToTake = e.type === 'tradingPlace'
              ? e.activate(this.scene.model.world.mainCharacter.getItemToTrader())
              : e.activate(this.scene.model.world.mainCharacter
                .isThisItemYouNeed(e.itemToActivate));

            const speech = e.getDialog();
            this.scene.model.world.mainCharacter.setPosition(
              this.scene.scene.key,
              [this.scene.player1.x, this.scene.player1.y],
            );

            if (speech) {
              this.scene.dialog.initDialog(e.position.coordinates, speech);
            } else {
              this.scene.model.world.toRender();
            }

            if (itemToTake) {
              if (e.type === 'tradingPlace') {
                this.scene.model.world.mainCharacter.giveItem(
                  this.scene.model.world.mainCharacter.getItemToTrader().name,
                );
              } else {
                this.scene.model.world.mainCharacter.giveItem(e.itemToActivate);
              }
              this.scene.model.world.mainCharacter.pickItem(itemToTake.activate());
            }
            this.scene.model.isFinishGame();
          });

          this.scene.physics.add.collider(this.scene.player1, itemObj);//
        });
      }
    });
  }
}
