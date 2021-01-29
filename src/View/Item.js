// You can write more code here

/* START OF COMPILED CODE */

class Item extends Phaser.GameObjects.Container {
  constructor(scene, x = 0, y = 0) {
    super(scene, x, y);

    this.scene = scene;
    console.log('++++++++++++++', scene.gameSet);
  }

  objectPositionInTheList() {
    const imageInLeftMenu = this.scene.add.image(228, 228, 'atlasPersonsObject', this.scene.gameSet.objectOnMap.Locator_421.image);
    this.add(imageInLeftMenu);
    imageInLeftMenu.setInteractive();
    imageInLeftMenu.on('pointerdown', (pointer) => {
      new Function(this.scene.gameSet.objectOnMap.Locator_421.functionPointerDown)();
    });
  }

  ItemsOnScene() {
    this.scene.gameSet.itemOnMap.forEach((e) => {
      // if(this.scene..key)
      if (this.scene.sys.config === e.location) {
        const zzz = this.scene.add.image(e.x, e.y, 'atlasPersonsObject', e.image);

        this.scene.time.addEvent({
          repeat: -1,
          delay: 500,
          callback: () => {
            zzz.visible = !zzz.visible;
          },
        });

        zzz.setInteractive();
        zzz.on('pointerdown', (pointer) => {
          new Function(e.functionPointerDown)();
        });
      }
    });
  }
}
