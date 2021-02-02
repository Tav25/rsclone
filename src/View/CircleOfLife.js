// You can write more code here

/* START OF COMPILED CODE */

class CircleOfLife extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    // img3
    this.x = x;
    this.y = y;
    this.scene = scene;

  }

  circleOfLifeInit() {
    const ellipse = this.scene.add.ellipse(this.x, this.y, 40, 40);
    ellipse.isFilled = true;
    console.log("CircleOfLife")


    const herosLifePoints = this.scene.model.world.mainCharacter.health.maxHealth - this.scene.model.world.mainCharacter.health.currentHealth;
    if (herosLifePoints < 32) { this.vbn(herosLifePoints, 0x69FF57, 0xF8FF18, this.scene); }
    if (herosLifePoints > 32) { this.vbn(herosLifePoints - 32, 0xF8FF18, 0xFF1F18, this.scene); }
    if (herosLifePoints > 64) { this.vbn(herosLifePoints - 64, 0xFF1F18, 0x000000, this.scene); }


  }

  vbn(didg, color0, color1, dfg) {
    
    const ellipse = dfg.add.ellipse(this.x, this.y, 40, 40);
    ellipse.isFilled = true;
    ellipse.fillColor = color1;
    ellipse.smoothness = 32;

    const graphics = dfg.add.graphics();
    graphics.fillStyle(color0, 1);
    const c = -90;
    const a = c + didg * 11.25;
    graphics.slice(this.x, this.y, 20, Phaser.Math.DegToRad(270), Phaser.Math.DegToRad(a), true);
    graphics.closePath();
    graphics.fillPath();

    const edgingElipse = dfg.add.ellipse(this.x, this.y, 40, 40);
		edgingElipse.isStroked = true;
		edgingElipse.strokeColor = 11119017;
  }

}
