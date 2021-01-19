import Item from './Item';
import { TItem } from '../../Types/types';

export default class MedKit extends Item {
  restoredHealth: number;

  constructor(itemObject: TItem) {
    super(itemObject);
    this.restoredHealth = itemObject.restoredHealth;
  }
}
