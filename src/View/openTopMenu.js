class openTopMenu extends Phaser.GameObjects.Container {
  constructor(scene, x, y) {
    super(scene, x, y);

    const rectangle = scene.add.rectangle(0, 0, 128, 128);
    rectangle.setOrigin(0, 0);
    rectangle.isFilled = true;
    rectangle.fillColor = 14474460;
    this.add(rectangle);

    const text = scene.add.text(26, 61, '', {});
    text.text = 'New text';
    text.setStyle({
      backgroundColor: '#00ccffff', color: '#120776ff', fontFamily: 'Tahoma', fontSize: '12px',
    });
    text.setPadding({
      left: 2, top: 2, right: 2, bottom: 2,
    });
    this.add(text);

    
  }

 
}


