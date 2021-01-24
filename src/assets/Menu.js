export default class TopMenu {
  constructor() {

  }

  test() {
    // text
    const text = this.add.text(209, 27, '', {});
    text.text = 'New text';
    text.setStyle({ color: '#000000ff', fontFamily: 'Tahoma', fontSize: '12px' });

    // rectangle2
    // const rectangle2 = this.add.rectangle(94, 93, 128, 128);
    // rectangle2.setOrigin(0, 0);
    // rectangle2.isFilled = true;
    // rectangle2.fillColor = 12500670;
    return text;
  }
}
