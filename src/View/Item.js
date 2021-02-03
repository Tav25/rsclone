class Item extends Phaser.GameObjects.Container {
  constructor(scene, x = 0, y = 0) {
    super(scene, x, y);

    this.scene = scene;
  }

  ItemsOnScene() {
    this.scene.gameSet.itemOnMap.forEach((e) => {
      if (this.scene.sys.config === e.location) {
        const itemObj = this.scene.add.image(e.x, e.y, 'atlasPersonsObject', e.image);

        this.scene.time.addEvent({
          repeat: -1,
          delay: 500,
          callback: () => {
            itemObj.visible = !itemObj.visible;
          },
        });

        itemObj.setInteractive();
        itemObj.on('pointerdown', (pointer) => {
          new Function(e.functionPointerDown)();
        });
      }
    });
  }
}
