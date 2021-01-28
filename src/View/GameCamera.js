// You can write more code here

/* START OF COMPILED CODE */

class GameCamera {
  constructor(scene) {
    const camera = scene.cameras.main;
    camera.startFollow(scene.player1);
    camera.setBounds(0, 0, scene.map.widthInPixels, scene.map.heightInPixels);
    camera.setViewport(9, 52, 288, 288);
    scene.camera = camera;
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
