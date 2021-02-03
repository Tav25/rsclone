class Arrows extends Phaser.GameObjects.Container {
  constructor(scene) {
    super(scene, 318, 290);

    // rectangle0
    const rectangle0 = scene.add.rectangle(14, 0, 15, 15);
    rectangle0.setOrigin(0, 0);
    rectangle0.isFilled = true;
    rectangle0.fillColor = 52533;
    this.add(rectangle0);

    const rectangle1 = scene.add.rectangle(27, 15, 15, 15);
    rectangle1.setOrigin(0, 0);
    rectangle1.isFilled = true;
    rectangle1.fillColor = 52530;
    this.add(rectangle1);

    const rectangle2 = scene.add.rectangle(14, 29, 15, 15);
    rectangle2.setOrigin(0, 0);
    rectangle2.isFilled = true;
    rectangle2.fillColor = 52533;
    this.add(rectangle2);

    const rectangle3 = scene.add.rectangle(0, 14, 15, 15);
    rectangle3.setOrigin(0, 0);
    rectangle3.isFilled = true;
    rectangle3.fillColor = 3788032;
    this.add(rectangle3);

    [this.rectangle0, this.rectangle1, this.rectangle2, this.rectangle3] = [rectangle0, rectangle1, rectangle2, rectangle3];
  }

  /**
	 * @param {() => string} x
	 */
  set directionOfMovement(x) {
	  this.rectangle0.isFilled = x[0];
	  this.rectangle1.isFilled = x[1];
	  this.rectangle2.isFilled = x[2];
	  this.rectangle3.isFilled = x[3];
  }
}
