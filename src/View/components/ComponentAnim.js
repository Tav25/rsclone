// You can write more code here

/* START OF COMPILED CODE */

class ComponentAnim {
  constructor(gameObject) {
    gameObject.__ComponentAnim = this;

    /** @type {Phaser.GameObjects.sprite} */
    this.gameObject = gameObject;
    /** @type {string} */
    this.animationKey = '';

    /* START-USER-CTR-CODE */
    this.gameObject.scene.events.once('update', () => {
      this.gameObject.play(this.animationKey);
    });
    /* END-USER-CTR-CODE */
  }

  /** @returns {ComponentAnim} */
  static getComponent(gameObject) {
    return gameObject.__ComponentAnim;
  }

  /* START-USER-CODE */

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
