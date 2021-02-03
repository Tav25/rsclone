class HealthСircle extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    this.x = x;
    this.y = y;
    this.scene = scene;
  }

  HealthСircleInit() {
    const ellipse = this.scene.add.ellipse(this.x, this.y, 40, 40);
    ellipse.isFilled = true;

    const herosLifePoints = this.scene.model.world.mainCharacter.health.maxHealth - this.scene.model.world.mainCharacter.health.currentHealth;
    if (herosLifePoints < 16) { this.vbn(herosLifePoints, 0x69FF57, 0xF8FF18, this.scene); }
    if (herosLifePoints >= 16) { this.vbn(herosLifePoints - 16, 0xF8FF18, 0xFF1F18, this.scene); }
    if (herosLifePoints > 32) { this.vbn(herosLifePoints - 32, 0xFF1F18, 0x000000, this.scene); }
  }

  vbn(herosLifePoints, color0, color1, scene) {
    const ellipse = scene.add.ellipse(this.x, this.y, 40, 40);
    ellipse.isFilled = true;
    ellipse.fillColor = color1;
    ellipse.smoothness = 32;
    const circleMultiplier = 22.5;

    const graphics = scene.add.graphics();
    graphics.fillStyle(color0, 1);
    const circleAngleCorrection = -90;
    const mainCircle = circleAngleCorrection + herosLifePoints * circleMultiplier;
    graphics.slice(this.x, this.y, 20, Phaser.Math.DegToRad(270), Phaser.Math.DegToRad(mainCircle), true);
    graphics.closePath();
    graphics.fillPath();

    const edgingElipse = scene.add.ellipse(this.x, this.y, 40, 40);
    edgingElipse.isStroked = true;
    edgingElipse.strokeColor = 11119017;
  }
}
